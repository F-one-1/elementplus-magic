import Page from '../model/Page.js'
import Search from '../model/Search.js'

export const getStoreColumn = function (store, name) {
  if (store instanceof Page) {
    return store[name].columns
  } else if (store instanceof Search) {
    return store.columns
  } else {
    return []
  }
}
