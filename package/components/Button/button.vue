<template>
  <div class="magic-buttons">
    <component
      v-for="(button, index) in currentButtons"
      @click.stop="onClick(button, $event)"
      v-bind="button"
      :key="index"
      :is="getLayout(button)"
      {{button.text}}
    >
    </component>
  </div>
</template>
<script>
import { computed } from '@vue/reactivity';
import Buttons from "./button.js";
export default {
  props: {
    data: {},
    buttons: {},
  },
  setup(props) {
    const currentButtons = computed(()=>{
      const buttons = []
      for(let key in props.buttons){
        console.log(key)
        const [action, ...attrs] = key.split(':')
        const button = Object.assign({},Buttons[action] || Buttons.default)
        const val = props.buttons[key]
        Object.assign(button,getButton(attrs,action),{ action },typeof val === 'function' ? {click: val } : val)
        buttons.push(button)
      }
    })
    const getButton = ((array, action) => {
      if (['space','divider'].indexOf(action) > -1){
        return array.reduce((result,item) =>{
          result.style = {
            margin :`0 ${item}px`
          }
          return result
        }, {})
      } else {
        return array.reduce((results, item) => {
            if (['medium', 'small', 'mini'].indexOf(item) > -1) {
              results.size = item
            } else if (['primary', 'success', 'warning', 'danger', 'info', 'text'].indexOf(item) > -1) {
              results.type = item
            } else if (item === 'true' || item === true || item === 'false' || item === false) {
              results.plain = item === 'true' || item === true
            } else if (item.indexOf('el-icon') > -1) {
              results.icon = item
            } else {
              results.text = item
            }
            return results
          }, {})
      }
    })
    const getLayout = ((button) => {
      return button.layout || 'el-button'
    })
    const onClick = ((button) => {
      return button.click 
    })
    return {
      currentButtons,
      getLayout,
      getButton,
      onClick
    }
  },
};
</script>