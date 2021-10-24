<template>
  <div
    class="magic-drawer"
    :style="{ zIndex: currentZ }">
    <div
      v-if="currentValue && maskVisible"
      class="magic-drawer-mask"
      :class="{ 'is-open': currentValue }"
      @click="onHide"
    />
    <!-- mask面具 wrap 包，裹 switch转换  -->
    <div
      class="magic-drawer-wrap"
      :style="`width: ${ parseInt(width) }px`"
      :class="[{ 'is-open': currentValue }, `is-${ position }`]">
      <el-button
        v-if="showIcon"
        class="magic-drawer-switch"
        @click="onToggle"
        :icon="currentIcon"
        type="primary"
      />
      <div
        v-if="title"
        class="magic-drawer-header">
        {{ title }}
        <span class="magic-drawer-close">
          <slot name="close">
            <span
              v-if="closeable"
              @click="onHide"
              class="magic-drawer-close-icon">
              <i class="el-icon-close"/>
            </span>
          </slot>
        </span>
      </div>
      <div
        class="magic-drawer-body"
        :style="bodyStyle">
        <slot/>
      </div>
      <div
        v-if="$slots.footer"
        class="magic-drawer-footer">
        <slot name="footer"/>
      </div>
    </div>
  </div>
</template>

<script>
import { computed } from '@vue/reactivity'
  import { getLayerIndex } from '../../utils/getLayerIndex'
  import {  } from 'vue'
  export default {
    name: 'MgDrawer',
    data() {
      return {
        v: {
          type: Boolean,
          default: true
        },
      }
    },
    props: {
      modelValue: {
        type: Boolean,
        default: true
      },
      title: {
        type: String,
        default: ''
      },
      width: {
        type: [String, Number],
        default: '296px'
      },
      closeable: {
        type: Boolean,
        default: true
      },
      position: {
        type: String,
        default: 'right'
      },
      showIcon: {
        type: Boolean,
        default: false
      },
      bodyStyle: {
        type: String,
        default: 'padding: 0 16px'
      },
      maskVisible: {
        type: Boolean,
        default: true
      },
      appendToBody: {
        type: Boolean,
        default: true
      }
    },
    setup(props){
      // 码住
      // const { value } = toRefs(props)
      // var currentValue = ref('')
      var currentValue = computed({
        get: () => {
          return props.value
        }
      })
      function onToggle (){
        if(currentValue){
          c
        }
      }
      function onHide(){
        currentValue.value = false
      }
      const currentIcon = computed(() =>{
        const [close, setting] = ['el-icon-close', 'el-icon-setting']
        return currentValue.value ? close : setting
      })
      return {
        currentValue,
        onToggle,
        onHide,
        currentIcon
      }
    },
    computed: {
      // currentValue: {
      //   get () {
      //     return this.value
      //   },
      //   set (val) {
      //     this.$emit('input', val)
      //   }
      // },
      // currentIcon () {
      //   const [close, setting] = ['el-icon-close', 'el-icon-setting']
      //   return currentValue.value ? close : setting
      // },
      currentZ () {
        return getLayerIndex()
      }
    },
    mounted () {
      if (this.appendToBody) {
        document.body.appendChild(this.$el)
      }
    },
    unmounted () {
      if (this.appendToBody && this.$el && this.$el.parentNode) {
        this.$el.parentNode.removeChild(this.$el)
      }
    }
  }
</script>
