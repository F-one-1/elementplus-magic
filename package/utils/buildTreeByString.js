import groupBy from 'lodash/groupBy'

export const buildTreeByString = function (rows, paths = [], { idField = 'id', splitSymbol = '.', replaceReg = /^root./ } = {}) {
  let result = []
  let obj = groupBy(rows, idField)

  paths.forEach(function (a) {
    let keys = a.replace(replaceReg, '').split(splitSymbol)
    keys.reduce(function (r, k) {
      if (!r[k]) {
        r[k] = { _: [] }
        r._.push({ ...(obj[k] ? obj[k][0] : {}), children: r[k]._ })
      }
      return r[k]
    }, this)
  }, { _: result })

  return result
}
