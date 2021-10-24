export const mixinOptions = function (Vue) {
  return {
    created () {
      const magic = this.$options.magic
      if (magic) {
        const obj = typeof magic === 'function' ? magic.call(this) : magic
        for (const key in obj) {
          const val = obj[key]
          if (key in this) {
            this[key] = val
          } else {
            Vue.util.defineReactive(this, key, val)
          }
        }
      }
    }
  }
}
