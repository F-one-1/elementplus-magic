// import get from 'lodash/get'

export default class Column {

  static TAG = ['mg-column', 'MgColumn']

  static POSITION = {
    form: ['form'],
    table: ['table'],
    treeGrid: ['treeGrid'],
    editable: ['editable']
  }

  static GetColumnsFormSlots (myslots = [], pos) {
    const array = Array.prototype.slice.apply(arguments)
    console.log(array,myslots,pos)
    return []
    // return myslots.reduce((results, item) => {
    //   let tag = get(item, 'componentOptions.tag')
    //   let position = get(item, 'componentOptions.propsData.position')
    //   let after = get(item, 'componentOptions.propsData.after')
    //   if (Column.TAG.indexOf(tag) > -1 && pos.indexOf(position) > -1) {
    //     results.push({ field: after, vNode: item })
    //   }
    //   return results
    // }, [])
  }
}
