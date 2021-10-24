import get from 'lodash/get'
import set from 'lodash/set'
import merge from 'lodash/merge'
import assign from 'lodash/assign'

class Storage {

  static create (storage) {
    if (storage instanceof Storage) {
      return storage
    } else if (Array.isArray(storage)) {
      return new Storage(...storage)
    } else {
      return new Storage(storage)
    }
  }

  constructor (object, field) {
    if (field) {
      this.field = field
      this.context = object
      this.isTransfer = true
    } else {
      this.storage = object
    }
  }

  get target () {
    return this.isTransfer ? this.context[this.field] : this.storage
  }

  set target (val) {
    if (this.isTransfer) {
      this.context[this.field] = val
    } else {
      this.storage = val
    }
  }

  get (name, def) {
    const val = name ? get(this.target, name) : this.target
    return val === undefined ? def : val
  }

  set (name, value) {
    if (typeof name === 'string') {
      this.target = assign({}, set(this.target, name, value))
    } else {
      this.target = assign({}, name)
    }
  }

  assign (storage) {
    this.target = assign({}, this.target, storage)
  }

  merge (storage) {
    this.target = merge({}, this.target, storage)
  }
}

export default Storage
