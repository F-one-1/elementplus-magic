export const siteData = {
  "base": "/magic/",
  "lang": "en-US",
  "title": "magic",
  "description": "基于 ElementUI 开发的一套高效的 UI 组件",
  "head": [
    [
      "link",
      {
        "rel": "icon",
        "href": "/logo.jpg"
      }
    ]
  ],
  "locales": {}
}

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateSiteData) {
    __VUE_HMR_RUNTIME__.updateSiteData(siteData)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ siteData }) => {
    __VUE_HMR_RUNTIME__.updateSiteData(siteData)
  })
}
