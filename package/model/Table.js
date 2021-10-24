import Super from './Super.js'
import Listener from './Listener'

class TableColumn {

  static batchCreate (columns, store) {
    return columns.map(column => TableColumn.create(column, store))
  }

  static create ({ label, field, layout, source, ...props }, store) {
    return new TableColumn({
      config: { label, field, layout, source },
      props: Object.assign({ align: 'center', minWidth: Math.max(label.length * 15 + 20, 90) }, props),
      events: store.getListener(Listener.Constant.table, field)
    })
  }

  constructor ({ config = {}, props = {}, events = {} }) {
    this.config = config
    this.events = events
    this.props = props
  }
}

class TableConfig {

  static create (config = {}, store) {
    const actions = store.getActions(config.actions)
    const events = store.getListener(Listener.Constant.table)
    return new TableConfig({ ...config, events, actions })
  }

  constructor (config) {
    const {
      idField = 'id',
      rowsKey = 'rows',
      totalKey = 'total',
      localPagination = false,
      checkOnClickRow = false,
      pagination = true,
      selection = true,
      dropable = false,
      serial = true,
      listenScrollBottom = false,
      paginationOptions,
      props = {},
      events = {},
      action = {},
      actionLayout,
      actions,
      panels,
      dynamicAction,
      filterColumn,
      ...object
    } = config
    this.idField = idField
    this.rowsKey = rowsKey
    this.totalKey = totalKey
    this.localPagination = localPagination
    this.pagination = pagination
    this.selection = selection
    this.dropable = dropable
    this.serial = serial
    this.action = action
    this.panels = panels
    this.actionLayout = actionLayout
    this.actions = actions
    this.listenScrollBottom = listenScrollBottom
    this.checkOnClickRow = checkOnClickRow
    this.paginationOptions = paginationOptions
    this.props = Object.assign(props, object)
    this.events = events
    this.dynamicAction = dynamicAction
    this.filterColumn = filterColumn
  }
}

class Table extends Super {

  static Events = {
    scrollBottom: 'scroll-bottom',
    delete: 'delete',
    search: 'search',
    create: 'create',
    drop: 'drop',
    edit: 'edit',
    init: 'init'
  }

  constructor ({ config = {}, columns, events, sources, value, listeners }) {
    super({ events, sources, value, listeners })
    this.columns = TableColumn.batchCreate(columns, this)
    this.config = TableConfig.create(config, this)
    setTimeout(this.emitEvent.bind(this, Table.Events.init), 0)
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

  onAction (action, button, { row, $index }) {
    switch (action) {
      case 'create':
        this.emitEvent(Table.Events.create, row)
        break
      case 'edit':
        this.emitEvent(Table.Events.edit, row)
        break
      case 'delete':
        this.emitEvent(Table.Events.delete, row)
        break
      default:
        this.emitListener(Listener.Constant.actions, action, row, button, $index)
        break
    }
  }

  callTable(fn, ...args) {
    this.context.$refs.table[fn](...args)
  }
}

export default Table
