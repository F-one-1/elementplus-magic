<template>
  <component
    :is="currentLayout"
    v-bind="$attrs">
    <!-- 这个v-bind="attrs"应该是没用 -->
    <!-- 按理说父组件并不需要子组件的参数 -->
    <slot/>
  </component>
</template>

<script>
import { computed, ref, toRefs } from '@vue/reactivity'
  import button from './button.vue'
  import icon from './icon.vue'

  const component = ref({ button, icon })

  export default {
    name: 'MgButtons',
    props: {
      layout: {
        type: String,
        default: 'button'
      }
    },
    setup(props){
      const { layout } = toRefs(props)
      // console.log(layout)
      const currentLayout = computed(()=>{
        return component.value[layout.value]
      })
      return { currentLayout }
    }
    // computed: {
    //   currentLayout() {
    //     console.log(component[this.layout])
    //     return component[this.layout]
    //   }
    // }
  }
</script>
