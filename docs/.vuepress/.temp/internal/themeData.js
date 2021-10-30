export const themeData = {
  "logo": "/logo.jpg",
  "repo": "https://github.com/F-one-1/Vue3-elementPlus-magic",
  "navbar": [
    {
      "text": "开发指南",
      "link": "/Form/"
    },
    {
      "text": "属性说明",
      "link": "/AutoLoading/"
    }
  ],
  "sidebar": [
    {
      "text": "Form",
      "link": "/Form/"
    },
    {
      "text": "Buttons",
      "link": "/Buttons/"
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
