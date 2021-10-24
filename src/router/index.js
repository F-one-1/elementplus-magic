import { createRouter, createWebHashHistory } from "vue-router"

const home = () => import("../home.vue")
const login = () => import("../login.vue")
const select = () => import("../Select.vue")
const drawer = () => import("../drawer.vue")
// const clipboard = () => import("../clipBoard.vue")
const popconfirm = () => import("../popconfirm.vue")
const autoloading = () => import("../AutoLoading.vue")
const form = () => import("../Form.vue")
const treeselect = () => import("../treeselect.vue")
const layer = () => import("../layer.vue")
const vuedr = () => import("../vueDR.vue")
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
    path: "/popconfirm",
    name: "popconfirm",
    component: popconfirm
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
    path: "/treeselect",
    name: "treeselect",
    component: treeselect
  },
  {
    path: "/layer",
    name: "layer",
    component: layer
  },
  {
    path: "/vuedr",
    name: "vuedr",
    component: vuedr
  },
]

export const router = createRouter({
  history: createWebHashHistory(),
  routes: routes
})