<template>
  <component :is="componentId" v-bind="$attrs"> </component>
</template>
<script>
import { computed, ref, toRefs } from "@vue/reactivity";
import button from "./button.vue";
import icon from "./icon.vue";
const component = ref({ button, icon });
export default {
  name: "MgButton",
  // 无效没有使用
  props: {
    layout: {
      type: String,
      default: "button",
    },
  },
  setup(props) {
    const { layout } = toRefs(props);
    const componentId = computed(() => {
      return component.value[layout.value];
    });
    return { componentId };
  },
};
</script>