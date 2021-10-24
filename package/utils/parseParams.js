import merge from 'lodash/merge'
import get from 'lodash/get'

const OrderByAlias = {
  ascending: 'asc',
  descending: 'desc'
}

const formatTemplate = function (template, object) {
  let raw = JSON.stringify(template, null, 2)
  const keys = raw.match(/\{(.+?)\}/g)
  keys.forEach(key => {
    const field = key.replace(/{|}/g, '')
    const reg = new RegExp(`"${ key }"`)
    const val = get(object, field, {})
    raw = raw.replace(reg, JSON.stringify(val))
  })
  return JSON.parse(raw)
}

const formatValue = function (key = 'Text', val) {
  switch (key) {
    case 'eq':
      return !val ? {} : { _eq: val }
    case 'range':
      return (val && val.length === 2) ? { _gte: val[0], _lt: val[1] } : {}
    case 'in':
      return val ? { _in: Array.isArray(val) ? val : [val] } : {}
    case 'like':
      return val ? { _like: `%${ val }%` } : {}
    default:
      return val ? { _like: `%${ val }%` } : {}
  }
}

export const parseParams = function (params = {}, options = {}) {
  const { currentPage, pageSize, sort = [], where = {} } = params
  const { sort: _sort = [], parse: _parse = {}, merge: _merge, template: _template } = options
  const result = {
    order_by: _sort
  }
  if (currentPage && pageSize) {
    result.limit = pageSize
    result.offset = (currentPage - 1) * pageSize
  }
  if (sort && sort.length) {
    const [field, type] = sort
    result.order_by.push({
      [field]: OrderByAlias[type]
    })
  }
  if (where) {
    result.where = Object.keys(where).reduce((result, field) => {
      const val = where[field]
      const handler = _parse[field]
      if (typeof handler === 'function') {
        Object.assign(result, handler(val))
      } else {
        result[field] = formatValue(handler, val)
      }
      return result
    }, {})
  }
  if (_merge) {
    result.where = merge(result.where, _merge)
  }
  if (_template) {
    result.where = formatTemplate(_template, result.where)
  }
  return result
}
