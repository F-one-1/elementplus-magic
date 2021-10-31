<template>
  <el-cascader
    :options="source"
    v-model="currentValue"
    v-bind="currentProps"
    v-on="currentEvents"
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
          placeholder: `请选择${ this.currentLabel }`,
          ...this.props
        }
      }
    }
  }
</script>
