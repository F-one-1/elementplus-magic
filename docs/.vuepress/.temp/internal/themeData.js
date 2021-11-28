export const themeData = {
  "logo": "/goodlogo.jpg",
  "repo": "https://github.com/F-one-1/elementplus-magic",
  "navbar": [
    {
      "text": "Start",
      "link": "/start/"
    },
    {
      "text": "表单组件",
      "link": "/Form/"
    }
  ],
  "sidebar": [
    {
      "text": "快速开始",
      "link": "/start/"
    },
    {
      "text": "Form",
      "link": "/Form/"
    },
    {
      "text": "Buttons",
      "link": "/Buttons/"
    },
    {
      "text": "Layer",
      "link": "/Layer/"
    },
    {
      "text": "Drawer",
      "link": "/Drawer/"
    },
    {
      "text": "更多相关",
      "link": "/demo/"
    }
  ],
  "sidebarDepth": 1,
  "locales": {
    "/": {
      "selectLanguageName": "English"
    }
  },
  "darkMode": true,
  "selectLanguageText": "Languages",
  "selectLanguageAriaLabel": "Select language",
  "editLink": true,
  "editLinkText": "Edit this page",
  "lastUpdated": true,
  "lastUpdatedText": "Last Updated",
  "contributors": true,
  "contributorsText": "Contributors",
  "notFound": [
    "There's nothing here.",
    "How did we get here?",
    "That's a Four-Oh-Four.",
    "Looks like we've got some broken links."
  ],
  "backToHome": "Take me home",
  "openInNewWindow": "open in new window",
  "toggleDarkMode": "toggle dark mode",
  "toggleSidebar": "toggle sidebar"
}

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateThemeData) {
    __VUE_HMR_RUNTIME__.updateThemeData(themeData)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ themeData }) => {
    __VUE_HMR_RUNTIME__.updateThemeData(themeData)
  })
}
