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
        <div>1</div>
        <div>1</div>
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

  export default {
    name: 'MgDrawer',
    props: {
      modelValue: {
        type: Boolean,
        default: false
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
    // emits: ['update:modelValue'],
    setup(props,context){
      const currentValue = computed({
        get: () => props.modelValue,
        set: val => {
          context.emit('update:modelValue',val)
        }
      })
      const currentIcon = computed(() =>{
        const [close, setting] = ['el-icon-close', 'el-icon-setting']
        return currentValue.value ? close : setting
      })
      const currentZ = computed(() => {
        return getLayerIndex()
      })
      const onToggle = () =>{
        currentValue.value = !currentValue.value
      }
      const onHide = () => {
        currentValue.value = false
      }
      return {
        currentValue,
        currentIcon,
        currentZ,
        onToggle,
        onHide
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
