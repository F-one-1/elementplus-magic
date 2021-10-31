<template>
  <el-color-picker
    v-model="currentValue"
    v-bind="currentProps"
    v-on="currentEvents"
  />
</template>

<script>
  import basic from './basic.js'
  import { ref } from "@vue/reactivity";
  export default {
    mixins: [basic],
    setup() {
      return {
        currentValue: ref(''),
      }
    },
    computed: {
      currentProps() {
        return {
          showAlpha: true,
          ...this.props
        }
      }
    }
  }
</script>
