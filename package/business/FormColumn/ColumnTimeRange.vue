<template>
  <el-time-picker
    v-model="currentValue"
    v-bind="currentProps"
    v-on="currentEvents"
    style="width:100%"
  />
</template>

<script>
  import basic from './basic.js'
  import { ref } from "@vue/reactivity";

  export default {
    mixins: [basic],
    setup() {
      return {
        currentValue: ref([])
      }
    },
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
