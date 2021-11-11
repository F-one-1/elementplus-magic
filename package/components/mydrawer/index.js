import Drawer from './index.vue'
Drawer.install = (app) => {
  app.component(Drawer.name,Drawer)
}

export default [
  Drawer
]
