<template>
  <div>1</div>
  <p>index</p>
  <button @click="toHome">toHome</button>
  <button @click="toSelect">toSelect</button>
</template>
<script>
import { useRouter } from 'vue-router'
export default {
  setup () {
    const router = useRouter()
    const toHome = (() => {
      router.push({
        name: 'home'
      })
    })
    const toSelect = (() => {
      router.push({
        name: 'select'
      })
    })
    return {
      toHome,
      toSelect
    }
  },
}
</script>
<style  scoped>
</style>