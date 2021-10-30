<template>
  <div>
    <el-input v-model="input"></el-input>
  </div>
</template>

<script>
import { ref } from "@vue/reactivity";
export default {
  setup() {
    return {
      input: ref(''),
    }
  },
}
</script>