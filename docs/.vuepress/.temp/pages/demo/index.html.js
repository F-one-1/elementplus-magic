export const data = {
  "key": "v-1473bf53",
  "path": "/demo/",
  "title": "",
  "lang": "en-US",
  "frontmatter": {},
  "excerpt": "",
  "headers": [
    {
      "level": 3,
      "title": "自我介绍",
      "slug": "自我介绍",
      "children": []
    },
    {
      "level": 3,
      "title": "项目相关",
      "slug": "项目相关",
      "children": []
    }
  ],
  "filePathRelative": "demo/README.md",
  "git": {
    "updatedTime": null,
    "contributors": []
  }
}

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updatePageData) {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ data }) => {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  })
}
