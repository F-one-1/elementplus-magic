export const emitEvent = function (events = {}, name, ...args) {
  let callback = events[name]
  callback = Array.isArray(callback) ? callback : [callback]
  callback = callback.filter(v => typeof v === 'function')
  callback.forEach(v => v(...args))
}
