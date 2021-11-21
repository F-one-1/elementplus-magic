<template>
  <el-input 
    v-model="input" 
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
      input: ref(''),
    }
  },
  computed: {
    currentProps (){
      return {
        placeholder: `请输入${ this.currentLabel }`,
        ...this.props
      }
    }
  }
})
</script>