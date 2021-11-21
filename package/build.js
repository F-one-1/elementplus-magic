import './style.scss'
import model from './model'
import * as utils from './utils'
import global from './global.js'
import components from './components'
import business from './business'
import ElNotification from 'element-plus'

export {
  model,
  utils,
  ElNotification
}
const install = (app) => {
  global.use(app)
  business.forEach(v => app.component(v.name, v))
  // business.forEach(v => Vue.component(v.name, v))
  components.forEach(v => app.component(v.name, v))
  app.mixin(utils.mixinOptions(app))
}
// if(typeof window !== 'undefined' && window.Vue){
//   install(window.Vue)
// }
export default {
  install
}