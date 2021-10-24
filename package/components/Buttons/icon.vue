<template>
  <div class="magic-buttons">
    <el-tooltip
      v-for="(button, index) in currentButtons"
      :content="button.text"
      :disabled="!button.tooltip"
      placement="top"
      effect="dark"
      :key="index"
    >
      <i
        class="magic-buttons-icon"
        @click.stop="onClick(button, $event)"
        :disabled="getDisabled(button)"
        :class="button.icon"
      />
    </el-tooltip>
  </div>
</template>
<script>
import { computed } from "@vue/reactivity";
import Buttons from "./icons.js";
export default {
  props: {
    disabled: {},
    data: {},
    buttons: {},
  },
  setup(props) {
    const currentButtons = computed(() => {
      const getButton = (array) => {
        return array.reduce((results, item) => {
          if (item.indexOf("el-icon") > -1 || item.indexOf("iconfont") > -1) {
            results.icon = item;
          } else if (
            item === "true" ||
            item === true ||
            item === "false" ||
            item === false
          ) {
            results.tooltip = item;
          } else {
            results.text = item;
          }
          return results;
        }, {});
      };
      const buttons = [];
      // console.log(this.buttons)
      for (let key in props.buttons) {
        const [action, ...attrs] = key.split(":");
        const button = Object.assign({}, Buttons[action] || Buttons.default);
        const val = props.buttons[key];
        // console.log(val)
        Object.assign(
          button,
          getButton(attrs),
          { action },
          typeof val === "function" ? { click: val } : val
        );
        buttons.push(button);
      }
      return buttons;
    });
    const onClick = (button, event) => {
      return button.click && button.click({ ...button, event }, props.data);
    };
    const getDisabled = (button) => {
      return props.disabled && props.disabled.indexOf(button.action) > -1;
    };
    return {
      currentButtons,
      onClick,
      getDisabled,
    };
  },
};
</script>