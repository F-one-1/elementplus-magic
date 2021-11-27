import './fit.js'
import { defineClientAppEnhance } from '@vuepress/client'
import d from './components/d.vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import magic from '../../package/index'
import '../../package/style.scss'
import mycode from './components/mgcode.vue'
import democode from './components/Code.vue'
import 'highlight.js/styles/atom-one-dark.css'
import hljsVuePlugin from "@highlightjs/vue-plugin";
// import 'highlight.js/styles/atom-one-dark.css'
// import 'vue-highlight.js/lib/allLanguages.js'
// import VueHighlightJS from 'vue-highlight.js'

//代码高亮文件引入
// import VueHighlightJS from 'vue-highlight.js'
// import 'highlight.js/styles/default.css' // or other highlight.js theme
// import 'vue-highlight.js/lib/allLanguages.js'// import Form from '../../package/components/Select/demo.vue'
export default defineClientAppEnhance(({ app, router, siteData }) => {
  app.component('d', d)
  app.component('mycode', mycode)
  app.component('democode', democode)
  app.use(hljsVuePlugin)
  // app.component('mycode', mycode)
  // app.component('demo', demo)
  // app.component('Form', Form)
  app.use(ElementPlus)
  app.use(magic)
  app.use(router)
})