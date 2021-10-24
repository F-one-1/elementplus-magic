export const findChildrenNode = (node, childrenField = 'children') => {
  let results = [node]
  if (node[childrenField] && node[childrenField].length) {
    node[childrenField].forEach(item => {
      results = results.concat(findChildrenNode(item))
    })
  }
  return results
}
