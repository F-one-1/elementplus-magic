import { createRouter, createWebHashHistory } from "vue-router"

const home = () => import("../home.vue")
const login = () => import("../login.vue")
const select = () => import("../Select.vue")
const drawer = () => import("../drawer.vue")
// const clipboard = () => import("../clipBoard.vue")
const autoloading = () => import("../AutoLoading.vue")
const form = () => import("../Form.vue")
const layer = () => import("../layer.vue")
const demo = () => import("../demo.vue")
const routes = [
  {
    path: "/home",
    name: "home",
    component: home
  },
  {
    path: "/login",
    name: "login",
    component: login
  },
  {
    path: "/select",
    name: "select",
    component: select
  },
  {
    path: "/drawer",
    name: "drawer",
    component: drawer
  },
  {
    path: "/autoloading",
    name: "autoloading",
    component: autoloading
  },
  {
    path: "/form",
    name: "form",
    component: form
  },
  {
    path: "/layer",
    name: "layer",
    component: layer
  },
  {
    path: "/demo",
    name: "demo",
    component: demo
  },
]

export const router = createRouter({
  history: createWebHashHistory(),
  routes: routes
})