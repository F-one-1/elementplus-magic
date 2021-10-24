export const parseSize = function (cur, max, def) {
  if (typeof cur === 'number') {
    return cur
  } else if (typeof cur === 'string') {
    if (cur.match(/px$/)) {
      return parseInt(cur)
    } else if (cur.match(/%$/)) {
      return parseInt(cur) / 100 * max
    }
  }
  return def
}
