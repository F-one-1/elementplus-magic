<template>
  <el-slider
    style="padding-left: 10px; box-sizing: border-box;"
    v-model="currentValue"
    v-bind="currentProps"
    v-on="currentEvents"
  />
</template>

<script>
  import basic from './basic.js'

  export default {
    mixins: [basic],
    computed: {
      currentValue: {
        get() {
          if (this.value === undefined) {
            const { range, min } = this.currentProps
            return range ? [min, min] : min
          } else {
            return this.value
          }
        },
        set(val) {
          this.$emit('input', val)
        }
      },
      currentProps() {
        return {
          step: 1,
          showStops: true,
          range: true,
          min: 6,
          max: 21,
          ...this.props
        }
      }
    }
  }
</script>
