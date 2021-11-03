export const data = {
  "key": "v-8daa1a0e",
  "path": "/",
  "title": "",
  "lang": "en-US",
  "frontmatter": {
    "home": true,
    "heroImage": "/logo.jpg",
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
        "title": "示例丰富",
        "details": "各种场景的代码示例，简单易学，粘贴复制即可使用。"
      },
      {
        "title": "配置灵活",
        "details": "默认的配置参数，丰富的配置接口，各种需求轻松满足。"
      },
      {
        "title": "内置适配器",
        "details": "内置多种适配器，轻松对接后台。"
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
    "updatedTime": 1635951479000,
    "contributors": [
      {
        "name": "“F-one-1”",
        "email": "fy1033409628@163.com",
        "commits": 2
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
