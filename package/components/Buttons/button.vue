<template>
  <div class="magic-buttons">
    <!-- v-for 还是相当于通过循环导出的，button是完整的属性，index为自定义组件的下标 -->
    <component
      v-for="(button, index) in currentButtons"
      @click.stop="onClick(button, event)"
      v-bind="button"
      :disabled="getDisabled(button)"
      :is="getLayout(button)"
      :key="index"
    >
      {{ button.text }}
    </component>
    <slot />
  </div>
</template>

<script>
import { computed } from "@vue/reactivity";
import Buttons from "./button.js";
// import button from './button.js'

export default {
  props: {
    disabled: {},
    buttons: {},
    data: {},
  },
  setup(props) {
    const currentButtons = computed(() => {
      const buttons = [];
      for (let key in props.buttons) {
        const [action, ...attrs] = key.split(":");
        const button = Object.assign({}, Buttons[action] || Buttons.default);
        const val = props.buttons[key];
        Object.assign(
          button,
          getButton(attrs, action),
          { action },
          typeof val === "function" ? { click: val } : val
        );
        buttons.push(button);
      }
      return buttons;
    });
    const getButton = (array, action) => {
      if (["space", "divider"].indexOf(action) > -1) {
        return array.reduce((results, item) => {
          results.style = {
            margin: `0 ${item}px`,
          };
          return results;
        }, {});
      } else {
        return array.reduce((results, item) => {
          if (["medium", "small", "mini"].indexOf(item) > -1) {
            results.size = item;
          } else if (
            ["primary", "success", "warning", "danger", "info", "text"].indexOf(
              item
            ) > -1
          ) {
            results.type = item;
          } else if (
            item === "true" ||
            item === true ||
            item === "false" ||
            item === false
          ) {
            results.plain = item === "true" || item === true;
          } else if (item.indexOf("el-icon") > -1) {
            results.icon = item;
          } else {
            results.text = item;
          }
          return results;
        }, {});
      }
    };
    const onClick = (button, event) => {
      return button.click && button.click({ ...button, event }, props.data);
    };
    const getLayout = (button) => {
      return button.layout || "el-button";
    };
    const getDisabled = (button) => {
      return props.disabled && props.disabled.indexOf(button.action) > -1;
    };
    return {
      currentButtons,
      getButton,
      onClick,
      getLayout,
      getDisabled,
    };
  },
};
</script>