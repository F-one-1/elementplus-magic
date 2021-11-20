<template>
  <el-input
    v-model="textarea"
    v-bind="currentProps"
    v-on="currentEvents"
  />
</template>

<script >
import { defineComponent, ref } from 'vue'
import basic from './basic.js'
export default defineComponent({
  mixins: [basic],
  setup() {
    return {
      textarea: ref(''),
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
})
</script>