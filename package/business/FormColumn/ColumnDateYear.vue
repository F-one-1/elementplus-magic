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
          type: 'year',
          placeholder: `选择年份`,
          clearable: true,
          ...this.props
        }
      }
    }
  }
</script>
