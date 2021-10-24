import Super from './Super'
import Listener from './Listener'

class TreeGridColumn {

  static batchCreate (columns, store) {
    return columns.map(column => TreeGridColumn.create(column, store))
  }

  static create ({ label, field, layout, source, ...props }, store) {
    return new TreeGridColumn({
      config: { label, field, layout, source },
      props: props,
      events: store.getListener(Listener.Constant.treeGrid, field)
    })
  }

  constructor ({ config = {}, props = {}, events = {} }) {
    this.config = config
    this.events = events
    this.props = props
  }
}

class TreeGridConfig {

  static create (config = {}, store) {
    const events = store.getListener(Listener.Constant.treeGrid)
    const actions = store.getActions(config.actions)
    return new TreeGridConfig({ ...config, events, actions })
  }

  constructor (config) {
    const {
      rowsKey = 'rows',
      action = {},
      actions,
      panels,
      props = {},
      events = {},
      idField = 'id',
      pidField = 'pid',
      pidsField = 'pids',
      nameField = 'name',
      orderField = 'order',
      expandAll = false,
      selection = false,
      dynamicAction,
      ...object
    } = config
    this.rowsKey = rowsKey
    this.action = action
    this.idField = idField
    this.pidField = pidField
    this.pidsField = pidsField
    this.orderField = orderField
    this.nameField = nameField
    this.expandAll = expandAll
    this.props = Object.assign(props, object, { rowKey: idField })
    this.events = events
    this.actions = actions
    this.panels = panels
    this.dynamicAction = dynamicAction
    this.selection = selection
  }
}

class TreeGrid extends Super {

  static Events = {
    init: 'init',
    search: 'search',
    create: 'create',
    edit: 'edit',
    delete: 'delete'
  }

  constructor ({ config = {}, columns = [], events, sources, value, listeners }) {
    super({ events, sources, value, listeners })
    this.columns = TreeGridColumn.batchCreate(columns, this)
    this.config = TreeGridConfig.create(config, this)
    setTimeout(this.emitEvent.bind(this, TreeGrid.Events.init), 0)
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

  getNodesByRow (row) {
    return this.context.getNodesByRow(row)
  }

  onAction (action, button, row) {
    switch (action) {
      case 'create':
        this.emitEvent(TreeGrid.Events.create, row)
        break
      case 'edit':
        this.emitEvent(TreeGrid.Events.edit, row)
        break
      case 'delete':
        this.emitEvent(TreeGrid.Events.delete, row)
        break
      default:
        this.emitListener(Listener.Constant.actions, action, row)
        break
    }
  }

  callTable(fn, ...args) {
    this.context.$refs.table[fn](...args)
  }
}

export default TreeGrid
