export const data = {
  "key": "v-8daa1a0e",
  "path": "/",
  "title": "",
  "lang": "en-US",
  "frontmatter": {
    "home": true,
    "heroImage": "/goodlogo.jpg",
    "actions": [
      {
        "text": "Start",
        "link": "/start/",
        "type": "primary"
      },
      {
        "text": "关于我",
        "link": "/demo/",
        "type": "secondary"
      }
    ],
    "features": [
      {
        "title": "示例驱动",
        "details": "文档中内嵌了一些相关代码样本，ctrl cv即可使用"
      },
      {
        "title": "配置灵活",
        "details": "组件的逻辑与参数与element-plus几乎相同，配置包含默认值，并可自主配置"
      },
      {
        "title": "周边丰富",
        "details": "组件同时搭配了抽屉组件以及弹窗拖拽组件，同时支持分离使用"
      }
    ]
  },
  "excerpt": "",
  "headers": [
    {
      "level": 3,
      "title": "快速集成",
      "slug": "快速集成",
      "children": []
    }
  ],
  "filePathRelative": "README.md",
  "git": {
    "updatedTime": 1638025215000,
    "contributors": [
      {
        "name": "“F-one-1”",
        "email": "fy1033409628@163.com",
        "commits": 7
      }
    ]
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
