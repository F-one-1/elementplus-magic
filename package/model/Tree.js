import merge from 'lodash/merge'
import Form from './Form.js'
import Super from './Super.js'
import Listener from './Listener'
import { copyFields } from '../utils/copyFields.js'
import { findChildrenNode } from '../utils/findChildrenNode.js'
import { tools as Tools } from '../global'

class TreeConfig {

  static create (config = {}, store) {
    const treeEvents = store.getListener(Listener.Constant.tree)
    return new TreeConfig({ ...config, treeEvents })
  }

  constructor (config) {
    const {
      title,
      describe,
      size = 'normal',
      treeKey = 'tree',
      searchOptions,
      treeEvents,
      treeOptions,
      addDescribe = '创建一级内容',
      idField = 'id',
      pidField = 'pid',
      pidsField = 'pids',
      childrenField = 'children',
      serialField = 'serial',
      filterable = false,
      editable = false,
      excludeField = [],
      deleteConfirmText = '您确定要删除吗？',
      dynamicAction,
      copyable = true,
      searchable = true,
      nodeKey
    } = config
    this.title = title
    this.size = size
    this.describe = describe
    this.treeKey = treeKey
    this.addDescribe = addDescribe
    this.searchOptions = Object.assign({
      placeholder: '请输入关键字',
      prefixIcon: 'el-icon-search',
      clearable: true
    }, searchOptions)
    this.treeOptions = Object.assign({
      props: {
        value: 'id',
        label: 'name',
        children: 'children'
      },
      indent: 14,
      nodeKey: nodeKey || idField,
      defaultExpandAll: true,
      highlightCurrent: true,
      expandOnClickNode: true
    }, treeOptions)
    this.treeEvents = treeEvents
    this.idField = idField
    this.pidField = pidField
    this.pidsField = pidsField
    this.childrenField = childrenField
    this.serialField = serialField
    this.filterable = filterable
    this.editable = editable
    this.deleteConfirmText = deleteConfirmText
    this.excludeField = ['__typename'].concat(childrenField, excludeField)
    this.dynamicAction = dynamicAction
    this.copyable = copyable
    this.searchable = searchable
  }
}

class Tree extends Super {

  static Events = {
    init: 'init',
    search: 'search',
    submit: 'submit',
    create: 'create',
    edit: 'edit',
    open: 'open',
    delete: 'delete',
    select: 'select',
    drop: 'drop',
    treeEdit: 'tree:edit',
    treeSave: 'tree:save',
    treeCancel: 'tree:cancel'
  }

  constructor ({ config = {}, actions = [], form, layer, columns, sources, events, value, listeners }) {
    super({ events, sources, value, listeners })
    this.initColumns(columns)
    this.initConfig(config)
    this.initActions(actions)
    this.initForm(form)
    this.initLayer(layer)
  }

  initColumns (columns) {
    this.columns = columns
  }

  initConfig (config) {
    this.config = TreeConfig.create(config, this)
  }

  initActions (actions) {
    this.actions = actions.reduce((results, item) => {
      const [action] = item.split(':')
      results[item] = this.onAction.bind(this, action)
      return results
    }, {})
  }

  initForm (form) {
    if (!form) return
    const { columns, value, config } = this.getOptions(form)
    this.form = new Form({
      columns: this.getColumns(columns),
      listeners: this.listeners,
      sources: this.sources,
      config: config,
      value: value
    })
    this.form.setEvent(Form.Events.cancel, this.onCancel.bind(this))
    this.form.setEvent(Form.Events.close, this.onClose.bind(this))
    this.form.setEvent(Form.Events.submit, this.onSubmit.bind(this))
    this.form.setEvent(Form.Events.search, this.onSearch.bind(this))
  }

  initLayer (layer) {
    this.layer = layer
  }

  getOptions (options) {
    if (Array.isArray(options)) {
      return { columns: options, config: {} }
    } else {
      const { columns, value, ...config } = options
      return { columns, value, config }
    }
  }

  getColumns (columns) {
    if (!columns) return this.columns
    return columns.map(column => {
      if (typeof column === 'string') {
        const [field, layout] = column.split(':')
        column = { field, layout }
      }
      const obj = this.columns.find(v => v.field === column.field)
      return merge({}, obj, column)
    })
  }

  onInit (context, done) {
    this.context = context
    const event = this.getEvent(Tree.Events.init)
    event ? this.emitEvent(Tree.Events.init, done) : done()
  }

  onCreate (row = {}) {
    const { copyable, idField, pidField, pidsField } = this.config
    if (copyable) {
      const pid = row[idField] || null
      const pids = (row[pidsField] || []).concat(pid ? [pid] : [])
      this.form.setValue({
        [pidField]: pid,
        [pidsField]: pids.map(v => (v + ''))
      })
    }
    this.emitEvent(Tree.Events.create, row)
    this.emitEvent(Tree.Events.open, row)
    this.callFormLayer('onShow', { title: '创建' })
  }

  onEdit (row = {}) {
    const { copyable, excludeField } = this.config
    if (copyable) {
      this.form.setValue(copyFields(row, excludeField))
    }
    this.emitEvent(Tree.Events.edit, row)
    this.emitEvent(Tree.Events.open, row)
    this.callFormLayer('onShow', { title: '编辑' })
  }

  onDelete (row = {}) {
    const { idField, childrenField, deleteConfirmText } = this.config
    const children = findChildrenNode(row, childrenField)
    const rows = children.map(v => v[idField])
    const text = deleteConfirmText
    const title = '提示'
    const options = { confirmButtonText: '确定', cancelButtonText: '取消', type: 'warning' }
    Tools
      .MessageBox
      .confirm(text, title, options)
      .then(() => {
        this.emitEvent(Tree.Events.delete, rows, (err) => {
          if (err instanceof Error) {
            const message = err ? err.message : '服务器错误, 请联系管理员'
            Tools.Notification({ type: 'error', title: '提示', message: message })
          } else {
            Tools.Notification({ type: 'success', title: '提示', message: '删除成功' })
            this.onSearch()
          }
        })
      })
  }

  onAction (action, button, row) {
    switch (action) {
      case 'create':
        this.onCreate(row)
        break
      case 'edit':
        this.onEdit(row)
        break
      case 'delete':
        this.onDelete(row)
        break
      default:
        this.emitListener(Listener.Constant.actions, action, row)
        break
    }
  }

  onClose () {
    this.callFormLayer('onClose')
  }

  onCancel () {
    this.callFormLayer('onClose')
  }

  onSubmit (...args) {
    this.emitEvent(Tree.Events.submit, ...args)
  }

  onSearch () {
    this.emitEvent(Tree.Events.search, this.getValue('query'))
  }

  callFormLayer (fn, ...args) {
    return this.context.$refs.form[fn](...args)
  }

  callTree (fn, ...args) {
    return this.context.$refs.tree[fn](...args)
  }
}

export default Tree
