<template>
  <el-input v-model="input" placeholder="Please input" />
</template>

<script >
import { defineComponent, ref } from 'vue'
export default defineComponent({
  name: "demoInput",
  setup() {
    return {
      input: ref(''),
    }
  },
})
</script>