// import contextMenu from '../basic/ContextMenu/index.vue'
// import { vue as Vue } from '../global.js'

// class ContextMenuModel {

//   constructor () {
//     this.instance = null
//   }

//   show (...args) {
//     if (!this.instance) {
//       const ContextMenuConstructor = Vue.extend(contextMenu)
//       this.instance = new ContextMenuConstructor({ el: document.createElement('div') })
//       document.body.appendChild(this.instance.$el)
//     }
//     this.instance.show(...args)
//   }

//   close () {
//     if (!this.instance) return
//     this.instance.close()
//   }
// }

// export const ContextMenu = new ContextMenuModel()
