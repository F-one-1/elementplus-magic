import './theme/index.scss'
import model from './model'
import * as utils from './utils'
import global from './global.js'
import components from './components'
import business from './business'
import ElNotification from 'element-plus'
// import Button from './components/Buttons/index.vue'
// import Select from './components/Select/elSelect.vue'
// import drawer from './components/mydrawer/index.vue'
// import MgAutoLoading from './components/AutoLoading/index.vue'
// import MgSpinner from './components/Spinner/index.vue'
// import MgForm from './business/Form/index.vue'
// import MgLayer from './components/Layer/myindex.vue'
// // import Drawer from './components/mydrawer/index.js'
// let components = [
//   Button,
//   Select,
//   drawer,
//   MgAutoLoading,
//   MgSpinner,
//   MgForm,
//   MgLayer,
//   // demo
// ]

export {
  model,
  utils,
  ElNotification
  // Drawer
}
export default {
  install (app) {
    global.use(app)
    business.forEach(v => app.component(v.name, v))
    // business.forEach(v => Vue.component(v.name, v))
    components.forEach(v => app.component(v.name, v))
    app.mixin(utils.mixinOptions(app))
  },
}
// error the npm style is not good 
