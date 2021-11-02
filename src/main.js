import { createApp } from 'vue'
import { router } from './router'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import magic from '../package/index'
import App from './App.vue'
const app = createApp(App)
// import 'vue-draggable-resizable/dist/VueDraggableResizable.css'
// 创建vue实例
// 然后挂载
app.use(ElementPlus)
app.use(magic)
app.use(router)

app.mount('#app')