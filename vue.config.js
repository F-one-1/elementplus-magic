// module.exports = {
//   transpileDependencies: true,
// }
const path = require('path')

module.exports = {
  productionSourceMap: process.env.NODE_ENV !== 'production',
  configureWebpack: {
    externals: process.env.NODE_ENV === 'production'
      ? { 'vue': 'vue', 'element-plus': 'element-plus' }
      : {}
  },
  chainWebpack: (config) => {
    config.resolve
      .alias
      .set('elementplus-magic', path.join(__dirname, 'package', '/'))
    config.module
      .rule('js')
      .exclude
      .add(path.join(__dirname, 'src', 'assets'))
      .add(path.join(__dirname, 'dist'))
      .end()
  }
}
