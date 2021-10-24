<template>
  <el-rate
    style="margin-top: 6px;"
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
          colors: ['#99A9BF', '#F7BA2A', '#FF9900'],
          allowHalf: true,
          ...this.props
        }
      }
    }
  }
</script>
