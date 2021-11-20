<template>
  <el-input-number v-model="num" :min="1" :max="10" @change="handleChange" />
</template>

<script>
import { defineComponent, ref } from 'vue'

export default defineComponent({
  name: "demoInputNumber",
  setup() {
    const num = ref(1)
    const handleChange = (value) => {
      console.log(value)
    }
    return {
      num,
      handleChange,
    }
  },
})

</script>