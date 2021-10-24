<template>
  <el-time-picker
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
          isRange: true,
          rangeSeparator: '至',
          startPlaceholder: '开始时间',
          endPlaceholder: '结束时间',
          ...this.props
        }
      }
    }
  }
</script>
