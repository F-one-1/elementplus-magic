const path = require('path')

module.exports = {
  // plugins: ["@vue/babel-plugin-jsx"],
  title: 'magic',
  base: '/magic/',
  description: '基于 ElementUI 开发的一套高效的 UI 组件',
  dest: './dist',
  head: [
    ['link', { rel: 'icon', href: `/logo.jpg` }]
  ],
  themeConfig: {
    logo: '/logo.jpg',
    repo: 'https://github.com/F-one-1/Vue3-elementPlus-magic',
    navbar: [
      { text: '开发指南', link: '/Form/' },
      { text: '属性说明', link: '/AutoLoading/' },
    ],
    sidebar: [
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
  },
}
