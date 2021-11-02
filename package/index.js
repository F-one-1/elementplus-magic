import './theme/index.scss'
// import './style/entry.scss'
// import basic from './basic'
// import business from './business'
// import global from './global.js'
import model from './model'
import * as utils from './utils'
// import * as decorator from './decorator'
// import Button from './components/button/Button.vue'
import Button from './components/Buttons/index.vue'
import Select from './components/Select/elSelect.vue'

import button from './components/Button/index.vue'
import PopConfirm from './components/PopConfirm/index.vue'
import drawer from './components/mydrawer/index.vue'
import Treeselect from './components/TreeSelect/index.vue'
import MgAutoLoading from './components/AutoLoading/index.vue'
import MgSpinner from './components/Spinner/index.vue'
import MgForm from './business/Form/index.vue'
import MgTreeselect from './components/TreeSelect/index.vue'
import MgLayer from './components/Layer/myindex.vue'
// import demo from './components/demojsx/index'
let components = [
  Button,
  Select,
  button,
  PopConfirm,
  drawer,
  Treeselect,
  MgAutoLoading,
  MgSpinner,
  MgForm,
  MgTreeselect,
  MgLayer,
  // demo
]

// const install = (Vue) => {
//   components.forEach(item => {
//     Vue.component(item.name, item)
//   })
//   // MessageCreate(Vue)
// }


// // 判断是否是直接引入文件,如果是，就不用调用 Vue.use()
// if (typeof window !== 'undefined' && window.Vue) {
//   install(window.Vue)
// }

// // export {
// //   utils
// // }
// export default {
//   install
// }

export {
  model,
  utils
}
export default {
  install (vue) {
    // global.use(vue, options)
    // basic.forEach(v => Vue.component(v.name, v))
    // business.forEach(v => Vue.component(v.name, v))
    components.forEach(v => vue.component(v.name, v))
    vue.mixin(utils.mixinOptions(vue))
  }
}