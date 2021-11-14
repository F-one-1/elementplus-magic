<template>
  <div>
    <el-input 
    v-model="input"
    v-bind="$attrs"
    >
    </el-input>
  </div>
</template>

<script>
import { ref } from "@vue/reactivity";
export default {
  name: 'MgText',
  setup() {
    return {
      input: ref(''),
    }
  },
}
</script>