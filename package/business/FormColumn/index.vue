<template>
  <component
    v-model="currentValue"
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
  },
};
</script>
