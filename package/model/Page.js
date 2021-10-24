import merge from 'lodash/merge'
import Super from './Super.js'
import Form from './Form.js'
import Import from './Import.js'
import Table from './Table.js'
import Search from './Search.js'
import TreeGrid from './TreeGrid.js'
import Listener from './Listener'
import { copyFields } from '../utils/copyFields.js'
import { tools as Tools } from '../global'
// 码住 ../global 的地方还是有些问题。
// 想想办法吧！！看这个地方感觉是有点问题的。不清楚是否兼容

class PageConfig {

  static create (config) {
    return new PageConfig(config)
  }

  constructor (config) {
    const {
      title,
      describe,
      size = 'normal',
      customization = false,
      position = 'title,,button,search',
      excludeField = []
    } = config
    this.size = size
    this.title = title
    this.describe = describe
    this.position = position
    this.customization = customization
    this.excludeField = ['__typename'].concat(excludeField)
  }
}

class Page extends Super {

  static Events = {
    init: 'init',
    search: 'search',
    submit: 'submit',
    create: 'create',
    edit: 'edit',
    open: 'open',
    delete: 'delete',
    import: 'import',
    drop: 'drop',
    reset: 'reset',
    cancel: 'cancel'
  }

  static Prefix = {
    form: ['f_', 'F_'],
    table: ['t_', 'T_'],
    search: ['s_', 'S_'],
    import: ['i_', 'I_'],
    treegrid: ['t_', 'T_'],
    editable: ['t_', 'T_']
  }

  constructor ({ config = {}, actions, form, search, table, treeGrid, layer, import: _import, columns = [], events, value, sources, listeners }) {
    super({ events, sources, value, listeners })
    this.initColumns(columns)
    this.initConfig(config)
    this.initActions(actions)
    this.initSearch(search)
    this.initForm(form)
    this.initTable(table)
    this.initTreeGrid(treeGrid)
    this.initLayer(layer)
    this.initImport(_import)
  }

  initColumns (columns) {
    this.columns = columns
  }

  initConfig (config) {
    this.config = PageConfig.create(config)
  }

  initActions (actions) {
    if (!actions) return
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
      columns: this.getColumns(columns, Page.Prefix.form),
      listeners: this.listeners,
      sources: this.sources,
      config: config,
      value
    })
    this.form.setEvent(Form.Events.cancel, this.onCancel.bind(this))
    this.form.setEvent(Form.Events.close, this.onClose.bind(this))
    this.form.setEvent(Form.Events.submit, this.onSubmit.bind(this))
    this.form.setEvent(Form.Events.search, this.onSearch.bind(this))
  }

  initSearch (search) {
    if (!search) return
    const { columns, value, config } = this.getOptions(search)
    this.search = new Search({
      columns: this.getColumns(columns, Page.Prefix.search),
      listeners: this.listeners,
      sources: this.sources,
      config: config,
      value
    })
    this.search.setEvent(Search.Events.search, this.onSearch.bind(this))
    this.search.setEvent(Search.Events.reset, this.emitEvent.bind(this, Page.Events.reset))
  }

  initTable (table) {
    if (!table) return
    const { columns, config } = this.getOptions(table)
    this.table = new Table({
      columns: this.getColumns(columns, Page.Prefix.table),
      listeners: this.listeners,
      sources: this.sources,
      config: config
    })
    const { excludeField } = this.config
    const { idField } = this.table.config
    this.table.setEvent(Table.Events.search, this.onSearch.bind(this))
    this.table.setEvent(Table.Events.create, (row) => {
      this.onCreate(copyFields(row, [idField].concat(excludeField)))
    })
    this.table.setEvent(Table.Events.edit, (row) => {
      this.onEdit(copyFields(row, excludeField))
    })
    this.table.setEvent(Table.Events.delete, (row) => {
      this.onDelete([row[idField]])
    })
    this.table.setEvent(Table.Events.drop, this.emitEvent.bind(this, Page.Events.drop))
  }

  initTreeGrid (treeGrid) {
    if (!treeGrid) return
    const { columns, config } = this.getOptions(treeGrid)
    this.treeGrid = new TreeGrid({
      columns: this.getColumns(columns, Page.Prefix.treegrid),
      listeners: this.listeners,
      sources: this.sources,
      config: config
    })
    const { excludeField } = this.config
    const { idField, pidField, pidsField } = this.treeGrid.config
    this.treeGrid.setEvent(TreeGrid.Events.search, this.onSearch.bind(this))
    this.treeGrid.setEvent(TreeGrid.Events.create, (row) => {
      const obj = {}
      if (row[idField]) {
        const pid = row[idField]
        const pids = (row[pidsField] || []).concat(pid)
        pidField && (obj[pidField] = pid)
        pidsField && (obj[pidsField] = pids)
      } else {
        pidField && (obj[pidField] = null)
        pidsField && (obj[pidsField] = [])
      }
      this.onCreate(obj)
    })
    this.treeGrid.setEvent(TreeGrid.Events.edit, (row) => {
      this.onEdit(copyFields(row, excludeField))
    })
    this.treeGrid.setEvent(TreeGrid.Events.delete, (row) => {
      const rows = this.treeGrid.getNodesByRow(row).map(item => item[idField])
      this.onDelete(rows)
    })
  }

  initLayer (layer) {
    this.layer = layer
  }

  initImport (_import) {
    if (!_import) return
    const { columns, config } = this.getOptions(_import)
    this.import = new Import({
      columns: this.getColumns(columns, Page.Prefix.import),
      listeners: this.listeners,
      sources: this.sources,
      config: config
    })
    this.import.setEvent(Import.Events.cancel, () => this.callImportLayer('onClose'))
    this.import.setEvent(Import.Events.close, () => this.callImportLayer('onClose'))
    this.import.setEvent(Import.Events.submit, this.emitEvent.bind(this, Page.Events.import))
  }

  onInit (context, done) {
    this.context = context
    const event = this.getEvent(Page.Events.init)
    event ? this.emitEvent(Page.Events.init, done) : done()
  }

  onClose () {
    this.callFormLayer('onClose')
  }

  onCancel () {
    this.callFormLayer('onClose')
    this.emitEvent(Page.Events.cancel, ...arguments)
  }

  onSubmit () {
    this.emitEvent(Page.Events.submit, ...arguments)
  }

  onAction (action) {
    const { excludeField } = this.config
    if (action === 'import') {
      return this.callImportLayer('onShow', { title: '导入数据' })
    }
    if (this.table) {
      const { idField } = this.table.config
      if (action === 'create') {
        this.onCreate({})
      } else if (action === 'edit') {
        const [data] = this.table.getValue('selection')
        const row = copyFields(data, excludeField)
        this.onEdit(row)
      } else if (action === 'delete') {
        const selection = this.table.getValue('selection') || []
        const rows = selection.map(column => column[idField])
        this.onDelete(rows)
      } else {
        const { row, selection } = this.table.getValue()
        this.emitListener(Listener.Constant.actions, action, row, selection)
      }
    } else if (this.treeGrid) {
      const { idField, pidField, pidsField } = this.treeGrid.config
      if (action === 'create') {
        const row = {}
        pidField && (row[pidField] = null)
        pidsField && (row[pidsField] = [])
        this.onCreate(row)
      } else if (action === 'edit') {
        const row = copyFields(this.treeGrid.getValue('row'), excludeField)
        this.onEdit(row)
      } else if (action === 'delete') {
        const row = this.treeGrid.getValue('row')
        const rows = this.treeGrid.getNodesByRow(row).map(item => item[idField])
        this.onDelete(rows)
      } else {
        const { row } = this.treeGrid.getValue()
        this.emitListener(Listener.Constant.actions, action, row)
      }
    }
  }

  onCreate (row) {
    if (!this.config.customization) {
      this.form.setValue(row)
      this.callFormLayer('onShow', { title: '创建' })
    }
    this.emitEvent(Page.Events.create, row)
    this.emitEvent(Page.Events.open, row)
  }

  onEdit (row) {
    if (!this.config.customization) {
      this.form.setValue(row)
      this.callFormLayer('onShow', { title: '编辑' })
    }
    this.emitEvent(Page.Events.edit, row)
    this.emitEvent(Page.Events.open, row)
  }

  onDelete (rows) {
    Tools
      .MessageBox
      .confirm(
        `此操作将永久删除所选中行,共计${ rows.length }条数据。是否继续?`,
        '提示',
        {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }
      )
      .then(() => {
        this.emitEvent(Page.Events.delete, rows, (err) => {
          if (err instanceof Error) {
            /* eslint-disable */
            console.error('page delete error', err)
            const message = err ? err.message : '服务器错误, 请联系管理员'
            Tools.Notification({ type: 'error', title: '提示', message: message })
          } else {
            Tools.Notification({ type: 'success', title: '提示', message: '删除成功' })
            this.onSearch()
          }
        })
      })
  }

  onSearch () {
    const searchParams = this.search ? this.search.getValue() : {}
    const listParams = this.getListParams()
    const params = { ...listParams, where: searchParams }
    this.emitEvent(Page.Events.search, params)
  }

  getListParams () {
    if (this.table) {
      return this.table.getValue().params
    } else if (this.treeGrid) {
      return this.treeGrid.getValue().params
    } else {
      return {}
    }
  }

  getOptions (options) {
    if (Array.isArray(options)) {
      return { columns: options, config: {}, value: {} }
    } else {
      const { columns, value, ...config } = options
      return { columns, value, config }
    }
  }

  getColumns (columns, prefix) {
    if (!columns) {
      return this.columns
    } else {
      const getColumn = (column) => {
        if (typeof column === 'string') {
          const [field, layout] = column.split(':')
          column = { field, layout }
        }
        const obj = this.columns.find(v => v.field === column.field)
        return merge(this.getObjByPreFix(obj, prefix), column)
      }
      const getColumnsByRange = ([start, end]) => {
        const startIndex = this.columns.findIndex(v => v.field === start.split(':')[0])
        const endIndex = this.columns.findIndex(v => v.field === end.split(':')[0])
        const range = this.columns.slice(startIndex + 1, endIndex).map(v => v.field)
        return [start, ...range, end]
      }
      return columns.reduce((result, column) => {
        if (Array.isArray(column)) {
          const _columns = getColumnsByRange(column).map(getColumn)
          result = [].concat(result, _columns)
        } else {
          result.push(getColumn(column))
        }
        return result
      }, [])
    }
  }

  getObjByPreFix (obj, prefix) {
    if (!obj) return {}
    const prefixes = Array.from(new Set(Object.values(Page.Prefix).reduce((result, v) => [].concat(result, v), [])))
    const result = {}
    for (let key in obj) {
      const val = obj[key]
      const tag = prefixes.find(v => key.match(new RegExp(`^${ v }`, 'g')))
      if (tag) {
        if (prefix.indexOf(tag) > -1) {
          key = key.replace(tag, '')
          result[key] = val
        }
      } else {
        result[key] = val
      }
    }
    return result
  }

  setConfig (field, val) {
    this.config[field] = val
  }

  callFormLayer (fn, ...args) {
    return this.context.$refs.form[fn](...args)
  }

  callImportLayer (fn, ...args) {
    return this.context.$refs.import[fn](...args)
  }
}

export default Page
