import { defineClientAppEnhance } from '@vuepress/client'
import d from './components/d.vue'
// import demo from './components/jsx.jsx'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import magic from '../../package/index'
import '../../package/style.scss'

// import Form from '../../package/components/Select/demo.vue'
export default defineClientAppEnhance(({ app, router, siteData }) => {
  app.component('d', d)
  // app.component('demo', demo)
  // app.component('Form', Form)
  app.use(ElementPlus)
  app.use(magic)
  app.use(router)
})