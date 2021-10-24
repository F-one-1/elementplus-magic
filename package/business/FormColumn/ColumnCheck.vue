<template>
  <el-checkbox
    class="magic-formColumn-check"
    v-bind="currentProps"
    v-on="currentEvents"
    v-model="currentValue"
  >
    {{ currentProps.title }}
  </el-checkbox>
</template>

<script>
import { computed } from '@vue/reactivity';
import basic from "./basic.js";

export default {
  mixins: [basic],
  setup(props, context) {
    // const currentValue1 = computed
    const currentValue = computed({
      get: () => props.modelValue,
      set: (val) => {
        context.emit("update:modelValue", val);
      },
    });
    return {
      currentValue,
    };
  },
  // computed: {
  //   currentValue: {
  //     get () {
  //       return this.value
  //     },
  //     set (val) {
  //       this.$emit('input', val)
  //     }
  //   }
  // }
};
</script>
