<template>
  <el-input 
    v-model="input" 
    v-bind="currentProps"
    v-on="currentEvents"
  />
</template>

<script >
import { defineComponent, ref } from 'vue'
export default defineComponent({
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