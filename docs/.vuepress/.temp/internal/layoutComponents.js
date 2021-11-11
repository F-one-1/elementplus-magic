import { defineAsyncComponent } from 'vue'

export const layoutComponents = {
  "404": defineAsyncComponent(() => import("D:/vscode/Vue/elementplus-magic/node_modules/@vuepress/theme-default/lib/client/layouts/404.vue")),
  "Layout": defineAsyncComponent(() => import("D:/vscode/Vue/elementplus-magic/node_modules/@vuepress/theme-default/lib/client/layouts/Layout.vue")),
}
