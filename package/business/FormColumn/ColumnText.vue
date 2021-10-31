<template>
  <div>
    <el-input 
    v-model="input"
    v-bind="currentProps"
    >
    </el-input>
  </div>
</template>

<script>
import basic from './basic.js'
import { ref } from "@vue/reactivity";
export default {
  mixins: [basic],
  setup() {
    return {
      input: ref(''),
    }
  },
  computed: {
    currentProps() {
      return {
        type: 'text',
        placeholder: `请输入${ this.currentLabel }`,
        clearable: true,
        ...this.props
      }
    }
  }
}
</script>