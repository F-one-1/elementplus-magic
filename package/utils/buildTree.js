export const buildTree = ({ data = [], parentId = null, pidField = 'pid', idField = 'id', nodeOrder, exclude }) => {
  return data.reduce((results, { ...item }) => {
    if (item[idField] === exclude) return results
    if (item[pidField] === parentId || (!parentId && !item[pidField])) {
      let children = buildTree({ data, parentId: item[idField], pidField, idField, nodeOrder, exclude })
      if (nodeOrder && children.length) {
        children.sort((a, b) => Number(a[nodeOrder] || 999) - Number(b[nodeOrder] || 999))
      }
      if (children.length) {
        item.children = children
      }
      results.push(item)
    }
    return results
  }, [])
}
