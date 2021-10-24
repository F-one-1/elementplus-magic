import cloneDeep from 'lodash/cloneDeep'
import unset from 'lodash/unset'

export const copyFields = (obj = {}, exclude = []) => {
  const result = cloneDeep(obj)
  exclude.forEach(path => unset(result, path))
  return result
}
