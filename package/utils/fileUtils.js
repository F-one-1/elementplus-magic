export const fileUtils = {
  ext (name) {
    return name.replace(/.+\./, '')
  },
  name (name) {
    const reg = new RegExp(`.${ this.ext(name) }$`)
    return name.replace(reg, '')
  }
}
