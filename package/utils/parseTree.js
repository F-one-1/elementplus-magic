export function parseTree ({ data = [], parent, idField = 'id', pidField = 'pid', pidsField = 'pids', childrenField = 'children', serial = 'serial' }) {
  return data.reduce((result, item, index) => {
    const obj = {
      ...item,
      [idField]: item[idField],
      [pidField]: parent ? parent[idField] : null,
      [pidsField]: parent ? (parent[pidsField] || []).concat(parent[idField]) : [],
      serial: index + 1
    }
    result.push(obj)
    if (item[childrenField]) {
      result = result.concat(parseTree({ data: item.children, parent: obj, idField, pidsField, childrenField, serial }))
    }
    return result
  }, [])
}
