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
    ],
    "footer": "版权所有@华夏天信（北京）智能低碳技术研究院有限公司"
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
