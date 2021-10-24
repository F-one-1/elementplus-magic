<template>
  <el-date-picker
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
          type: 'month',
          placeholder: `选择月份`,
          clearable: true,
          ...this.props
        }
      }
    }
  }
</script>
