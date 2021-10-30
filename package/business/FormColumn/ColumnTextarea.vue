<template>
  <el-input
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
    setup(){
      return {
        currentValue: ref(''),
      }
    },
    computed: {
      currentProps() {
        return {
          type: 'textarea',
          placeholder: `请输入${ this.currentLabel }`,
          clearable: true,
          autosize: { minRows: 2, maxRows: 5 },
          ...this.props
        }
      }
    }
  }
</script>
