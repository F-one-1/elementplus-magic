const path = require('path')

module.exports = {
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
    sidebar: {
      '/': [
        'Form/',
        'Search/',
        'Table/',
        'Layer/',
        'PopoverConfirm/',
        'Buttons/',
        'QRCode/',
        'Clipboard/',
        'FullScreen/',
        'Spinner/',
        'AutoLoading/',
        'Select/',
        'SignaturePen/',
        'Treeselect/',
        'Drawer/',
        'Split/',
        'Print/',
        'Title/'
      ]
    }
  },
  chainWebpack: (config) => {
    config.resolve.alias.set('magic', path.join(__dirname, '../../package/'))
  }
}
