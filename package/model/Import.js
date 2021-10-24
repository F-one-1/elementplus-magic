import Super from './Super.js'

class ImportConfig {

  static create (config = {}) {
    return new ImportConfig(config)
  }

  constructor ({ pagination = true, selection = true }) {
    this.pagination = pagination
    this.selection = selection
  }
}

class ImportColumn {

  static batchCreate (columns) {
    return columns.map(column => ImportColumn.create(column))
  }

  static create ({ label, field, relation }) {
    return new ImportColumn({ label, field, relation })
  }

  constructor ({ label, field, relation }) {
    this.label = label
    this.field = field
    this.layout = 'Text'
    this.relation = relation
  }
}

class Import extends Super {

  static Events = {
    close: 'close',
    cancel: 'cancel',
    submit: 'submit',
    init: 'init'
  }

  constructor ({ columns, config = {}, events, sources, value }) {
    super({ events, sources, value })
    this.columns = ImportColumn.batchCreate(columns)
    this.config = ImportConfig.create(config)
    setTimeout(this.emitEvent.bind(this, Import.Events.init), 0)
  }
}

export default Import
