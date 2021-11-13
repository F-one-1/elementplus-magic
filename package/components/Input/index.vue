<template>
  <el-input v-model="input" placeholder="Please input" />
</template>

<script>
import { ref } from 'vue'
export default {
  name: 'demoInput',
  setup() {
    return {
      input: ref('')
    }
  }
}
</script>