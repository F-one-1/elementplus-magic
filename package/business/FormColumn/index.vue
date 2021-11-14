<template>
  <component
    v-model="currentValue"
    v-bind="$attrs"
    :is="currentLayout"
    :props="props || prop"
    :events="events"
    :source="source"
  />
</template>

<script>
// import { computed } from '@vue/reactivity';
import components from "./index.js";

export default {
  name: "MgFormColumn",
  props: {
    layout: {},
    modelValue: {},
    source: {},
    events: {},
    props: {},
    prop: {},
  },
  // setup(props, context) {
  //   // const currentValue1 = computed
  //   const currentValue = computed({
  //     get: () => props.modelValue,
  //     set: (val) => {
  //       context.emit("update:modelValue", val);
  //     },
  //   });
  //   return {
  //     currentValue,
  //   };
  // },
  computed: {
    currentLayout() {
      return typeof this.layout === "string"
        ? components["Column" + this.layout]
        : this.layout;
    },
    currentValue: {
      get() {
        return this.modelValue
      },
      set(val) {
        this.$emit('update:modelValue', val)
      }
    }
    // currentValue: {
    //   get() {
    //     return this.value
    //   },
    //   set(val) {
    //     this.$emit('input', val)
    //   }
    // }
  },
};
</script>
