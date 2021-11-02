import { Vuepress } from '@vuepress/client/lib/components/Vuepress'

const routeItems = [
  ["v-8daa1a0e","/","",["/index.html","/README.md"]],
  ["v-cf0f0232","/Buttons/","Buttons",["/Buttons/index.html","/Buttons/README.md"]],
  ["v-1473bf53","/demo/","",["/demo/index.html","/demo/README.md"]],
  ["v-3f443025","/Drawer/","Drawer",["/Drawer/index.html","/Drawer/README.md"]],
  ["v-12d19c72","/Form/","Form",["/Form/index.html","/Form/README.md"]],
  ["v-50dcd557","/Layer/","Layer",["/Layer/index.html","/Layer/README.md"]],
  ["v-3706649a","/404.html","",["/404"]],
]

export const pagesRoutes = routeItems.reduce(
  (result, [name, path, title, redirects]) => {
    result.push(
      {
        name,
        path,
        component: Vuepress,
        meta: { title },
      },
      ...redirects.map((item) => ({
        path: item,
        redirect: path,
      }))
    )
    return result
  },
  [
    {
      name: "404",
      path: "/:catchAll(.*)",
      component: Vuepress,
    }
  ]
)
