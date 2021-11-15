<template>
  <el-input v-model="currentValue" v-bind="$attrs" placeholder="Please input" />
</template>

<script>
import { computed } from '@vue/reactivity'
export default {
  name: 'demoInput',
  props: {
    modelValue: {}
  },
  emits: ['update:modelValue'],
  setup(props,context) {
    // const currentValue1 = computed
    const currentValue = computed({
      get: () => props.modelValue,
      set: val => {
        context.emit('update:modelValue',val)
      }
    })
    return {
      currentValue
    }
  },
}
</script>