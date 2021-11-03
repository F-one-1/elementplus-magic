// module.exports = {
//   transpileDependencies: true,
// }
const path = require('path')

module.exports = {
  chainWebpack: (config) => {
    config.resolve
      .alias
      .set('magic', path.join(__dirname, 'package', '/'))
    config.module
      .rule('js')
      .exclude
      .add(path.join(__dirname, 'src', 'assets'))
      .add(path.join(__dirname, 'dist'))
      .end()
  }
}
