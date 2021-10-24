<template>
  <el-color-picker
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
      currentProps() {
        return {
          showAlpha: true,
          ...this.props
        }
      }
    }
  }
</script>
