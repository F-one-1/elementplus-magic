import model from './model'
export {
  model
}
export default {
  install (Vue, options) {
    global.use(Vue, options)
    basic.forEach(v => Vue.component(v.name, v))
    business.forEach(v => Vue.component(v.name, v))
    Vue.mixin(utils.mixinOptions(Vue))
  }
}