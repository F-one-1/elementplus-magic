import Super from './Super.js'
import Listener from './Listener'
import cloneDeep from 'lodash/cloneDeep'

class EditableColumn {

  static batchCreate (columns, store) {
    return columns.map(column => EditableColumn.create(column, store))
  }

  static create ({ label, field, layout, source, width, formatter, column, editable, ...props }, store) {
    return new EditableColumn({
      config: { label, field, layout, source, column: Object.assign({ width, formatter, align: 'center' }, column), editable: editable === undefined ? store.config.editable : editable },
      props: Object.assign({ size: store.config.size }, props),
      events: store.getListener(Listener.Constant.editable, field)
    })
  }

  constructor ({ config = {}, props = {}, events = {} }) {
    this.config = config
    this.events = events
    this.props = props
  }
}

class EditableConfig {

  static create (config = {}, store) {
    const actions = store.getActions(config.actions)
    const events = store.getListener(Listener.Constant.editable)
    return new EditableConfig({ ...config, events, actions })
  }

  constructor (config) {
    const {
      rowsKey = 'rows',
      totalKey = 'total',
      idField = 'id',
      pagination = false,
      selection = true,
      dropable = false,
      serial = true,
      paginationOptions,
      listenScrollBottom = false,
      checkOnClickRow = false,
      editable = true,
      disabled = false,
      useEmpty = false,
      newObject = {},
      editMode = 1,
      minRow = 1,
      size,
      props = {},
      events = {},
      action = {},
      actions,
      panels,
      ...object
    } = config
    this.rowsKey = rowsKey
    this.totalKey = totalKey
    this.idField = idField
    this.pagination = pagination
    this.selection = selection
    this.dropable = dropable
    this.serial = serial
    this.action = action
    this.actions = actions
    this.panels = panels
    this.editable = editable
    this.disabled = disabled
    this.newObject = newObject
    this.useEmpty = useEmpty
    this.editMode = editMode
    this.minRow = minRow
    this.size = size
    this.listenScrollBottom = listenScrollBottom
    this.checkOnClickRow = checkOnClickRow
    this.paginationOptions = paginationOptions
    this.props = Object.assign({ size, rowKey: idField }, props, object)
    this.events = events
  }
}

class Editable extends Super {

  static Events = {
    scrollBottom: 'scroll-bottom',
    delete: 'delete',
    search: 'search',
    create: 'create',
    drop: 'drop',
    edit: 'edit',
    init: 'init',
    clickEmpty: 'click-empty'
  }

  constructor ({ config = {}, columns, events, sources, value, listeners }) {
    super({ events, sources, value, listeners })
    this.config = EditableConfig.create(config, this)
    this.columns = EditableColumn.batchCreate(columns, this)
    setTimeout(this.emitEvent.bind(this, Editable.Events.init), 0)
  }

  create (context) {
    this.context = context
  }

  getActions (actions) {
    if (!actions) return {}
    return actions.reduce((results, item) => {
      const [action] = item.split(':')
      results[item] = this.onAction.bind(this, action)
      return results
    }, {})
  }

  onAction (action, button, { row, $index: index }) {
    switch (action) {
      case 'create':
        this.onPlus(index, cloneDeep(this.config.newObject))
        this.emitEvent(Editable.Events.create, row, index)
        break
      case 'delete':
        this.onMinus(index)
        this.emitEvent(Editable.Events.delete, row, index)
        break
      default:
        this.emitListener(Listener.Constant.actions, action, row, index)
        break
    }
  }

  onPlus (index, row = {}) {
    const rowsKey = this.config.rowsKey
    const rows = this.getValue(rowsKey, [])
    rows.splice(index + 1, 0, row)
    this.setValue('rows', rows)
  }

  onMinus (index) {
    const rowsKey = this.config.rowsKey
    const minRow = this.config.minRow
    const rows = this.getValue(rowsKey, [])
    if (rows.length === minRow) return
    rows.splice(index, 1)
    this.setValue('rows', rows)
  }

  callTable (fn, ...args) {
    return this.context.$refs.table[fn](...args)
  }
}

export default Editable
