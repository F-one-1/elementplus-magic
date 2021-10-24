import Storage from './Storage.js'
import Listener from './Listener'

class Super {

  constructor({ value = {}, events = {}, sources = {}, listeners = {} }) {
    this.value = Storage.create(value)
    this.events = Storage.create(events)
    this.sources = Storage.create(sources)
    this.listeners = Listener.create(listeners)
  }

  getListener() {
    return this.listeners.get(...arguments)
  }

  emitListener() {
    return this.listeners.emit(...arguments)
  }

  getValue() {
    return this.value.get(...arguments)
  }

  setValue() {
    return this.value.set(...arguments)
  }

  assignValue() {
    return this.value.assign(...arguments)
  }

  mergeValue() {
    return this.value.merge(...arguments)
  }

  appendValue(key, data) {
    let value = this.getValue(key) || []
    value = [].concat(value, data)
    return this.setValue(key, value)
  }

  getSource() {
    return this.sources.get(...arguments)
  }

  setSource() {
    return this.sources.set(...arguments)
  }

  assignSource() {
    return this.sources.assign(...arguments)
  }

  mergeSource() {
    return this.sources.merge(...arguments)
  }

  appendSource(key, data) {
    let source = this.getSource(key) || []
    source = [].concat(source, data)
    return this.setSource(key, source)
  }

  getEvent() {
    return this.events.get(...arguments)
  }

  setEvent() {
    return this.events.set(...arguments)
  }

  emitEvent(name, ...args) {
    const callback = this.getEvent(name)
    if (!callback) return
    return callback && callback.call(this, ...args)
  }
}

export default Super
