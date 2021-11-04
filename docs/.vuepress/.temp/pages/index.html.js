export const data = {
  "key": "v-8daa1a0e",
  "path": "/",
  "title": "",
  "lang": "en-US",
  "frontmatter": {
    "home": true,
    "heroImage": "/newlogo.jpg",
    "actions": [
      {
        "text": "快速开始",
        "link": "/Form/",
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
        "title": "🦏🐂🐏🐅",
        "details": "🐕🐱🦒🐖🐺🦊🤡"
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
    "updatedTime": 1636009467000,
    "contributors": [
      {
        "name": "“F-one-1”",
        "email": "fy1033409628@163.com",
        "commits": 4
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
