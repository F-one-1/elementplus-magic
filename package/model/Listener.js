class Listener {

  static create (listeners) {
    return listeners instanceof Listener ? listeners : new Listener(listeners)
  }

  static Constant = {
    form: 'form',
    table: 'table',
    tree: 'tree',
    search: 'search',
    actions: 'actions',
    treeGrid: 'treeGrid',
    editable: 'editable'
  }

  constructor (listeners = {}) {
    const fn = (result, name, event, handler) => {
      if (!result[name]) result[name] = {}
      result[name][event] = handler
      return result
    }
    this.listeners = Object.keys(listeners).reduce((result, key) => {
      const [path, event] = key.split(':')
      const [name] = path.split(/\[|\]/g)
      const match = path.match(/\[(.+)\]/g)
      const field = match ? match[0].replace(/^\[|\]$/g, '') : null
      const handler = listeners[key]
      if (field) {
        const fields = field.split(/,|，/g)
        if (fields.length === 1) {
          fn(result, `${ name }[${ fields[0] }]`, event, handler)
        } else {
          fields.forEach(item => {
            fn(result, `${ name }[${ item }]`, event, handler.bind(null, item))
          })
        }
      } else {
        fn(result, name, event, handler)
      }
      return result
    }, {})
  }

  get (key, field) {
    return this.listeners[field ? `${ key }[${ field }]` : key]
  }

  emit (key, name, ...args) {
    const obj = this.listeners[key]
    const handler = obj[name]
    handler && handler(...args)
  }
}

export default Listener
