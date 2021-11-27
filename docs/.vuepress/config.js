const path = require('path')

module.exports = {
  // plugins: ["@vue/babel-plugin-jsx"],
  title: 'elementplus-magic',
  base: '/elementplus-magic/',
  description: '基于 ElementPlus 开发的一套高效的 UI 组件',
  dest: './dist',
  head: [
    ['link', { rel: 'icon', href: `/goodlogo.jpg` }]
  ],
  themeConfig: {
    logo: '/goodlogo.jpg',
    repo: 'https://github.com/F-one-1/elementplus-magic',
    navbar: [
      { text: 'Start', link: '/start/' },
      { text: '表单组件', link: '/Form/' },
    ],
    sidebar: [
      {
        text: '快速开始',
        link: '/start/',
      },
      {
        text: 'Form',
        link: '/Form/',
      },
      {
        text: 'Buttons',
        link: '/Buttons/',
      },
      {
        text: 'Layer',
        link: '/Layer/',
      },
      {
        text: 'Drawer',
        link: '/Drawer/',
      },
      {
        text: '更多相关',
        link: '/demo/',
      },
    ],
    sidebarDepth: 1,
  },
  // module: {
  //   rules: {
  //     test: /\.(js|jsx)$/,
  //     loader: 'babel-loader',
  //     options: {
  //       plugins: [
  //         ["@babel/preset-env"],
  //         ['@vue/babel-plugin-jsx'],
  //       ],
  //     },
  //   },
  // },
  chainWebpack: (config) => {
    config.resolve.alias.set('magic', path.join(__dirname, '../../package/'))
  }
}
