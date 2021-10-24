export const throttle = function (fn, delay, mustRunDelay = 0) {
  let timer = null
  let tStart
  return function () {
    const context = this
    const args = arguments
    const tCurr = +new Date()
    clearTimeout(timer)
    if (!tStart) {
      tStart = tCurr
    }
    if (mustRunDelay !== 0 && tCurr - tStart >= mustRunDelay) {
      fn.apply(context, args)
      tStart = tCurr
    } else {
      timer = setTimeout(function () {
        fn.apply(context, args)
      }, delay)
    }
  }
}
