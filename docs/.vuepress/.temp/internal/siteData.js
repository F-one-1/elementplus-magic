export const siteData = {
  "base": "/elementplus-magic/",
  "lang": "en-US",
  "title": "elementplus-magic",
  "description": "基于 ElementUI 开发的一套高效的 UI 组件",
  "head": [
    [
      "link",
      {
        "rel": "icon",
        "href": "/newlogo.jpg"
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
