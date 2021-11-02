<template>
  <div
    class="magic-layer"
    :style="{ zIndex: currentZ }">
    <transition name="el-fade-in">
      <div
        v-if="currentValue && showMask"
        class="magic-layer-mask"
        @click="onHide"
      />
    </transition>
    <transition name="dialog-fade">
      <vue-draggable-resizable
        @resizing="onResizing"
        :class="{ 'is-draggable': draggable }"
        dragHandle=".magic-layer-header"
        class="magic-layer-content"
        :draggable="draggable"
        :resizable="resizable"
        :handles="handles"
        :w="currentWidth"
        :h="currentHeight"
        :x="currentX"
        :y="currentY"
        :minWidth="minWidth"
        :minHeight="minHeight"
        v-if="true"
        v-bind="$attrs">
        <div
          v-if="showTitle"
          class="magic-layer-header">
          <slot name="title">
            {{ currentTitle }}
          </slot>
        </div>
        <div
          v-if="showTool"
          class="magic-layer-tools">
          <el-icon
            @click="onClose"
            class="el-icon-close"
          />
        </div>
        <div
          class="magic-layer-body"
          :style="bodyStyle"
          ref="content">
          <slot/>
        </div>
        <div
          v-if="currentStyle"
          class="magic-layer-style">
          {{ currentStyle.w }} , {{ currentStyle.h }}
        </div>
        <slot
          v-if="showBtn && $slots.footer"
          class="magic-layer-btn"
          name="footer">
        </slot>
        <div
          v-if="showBtn && !$slots.footer"
          class="magic-layer-btn">
          <span>
              <slot
                v-if="$slots.btn"
                name="btn"
              />
            </span>
          <span>
              <el-button
                @click="onCancel"
                size="small">
                {{ cancelText }}
              </el-button>
              <el-button
                style="margin-left: 15px"
                @click="onSubmit"
                :loading="currentLoading"
                type="primary"
                size="small">
                {{ confirmText }}
              </el-button>
            </span>
        </div>
      </vue-draggable-resizable>
    </transition>
  </div>
</template>

<script>
  import { parseSize } from '../../utils/parseSize.js'
  import { throttle } from '../../utils/throttle.js'
  import { getLayerIndex } from '../../utils/getLayerIndex'
  import { tools as Tools } from '../../global'
  import VueDraggableResizable from "vue-draggable-resizable/src/components/vue-draggable-resizable.vue";

  const Size = [800, 500]

  export default {
    name: 'MgLayer',
    components: { VueDraggableResizable },
    props: {
      title: {
        type: String
      },
      modelValue: {
        type: Boolean
      },
      width: {
        type: [String, Number],
        default: '46%'
      },
      height: {
        type: [String, Number]
      },
      top: {
        type: [String, Number],
        default: '12%'
      },
      left: {
        type: [String, Number]
      },
      minWidth: {
        type: Number,
        default: 480
      },
      minHeight: {
        type: Number,
        default: 300
      },
      maxHeight: {
        type: [String, Number]
      },
      handles: {
        type: Array,
        default: () => ['br']
      },
      draggable: {
        type: Boolean,
        default: true
      },
      resizable: {
        type: Boolean,
        default: true
      },
      showMask: {
        type: Boolean,
        default: true
      },
      showBtn: {
        type: Boolean,
        default: false
      },
      showTitle: {
        type: Boolean,
        default: true
      },
      showTool: {
        type: Boolean,
        default: true
      },
      appendToBody: {
        type: Boolean,
        default: true
      },
      maskAllowOff: {
        type: Boolean,
        default: true
      },
      bodyStyle: {
        type: [String, Object]
      },
      cancelText: {
        type: String,
        default: '取 消'
      },
      confirmText: {
        type: String,
        default: '确 定'
      },
      autoNotify: {
        type: Boolean,
        default: true
      }
    },
    data() {
      return {
        currentStyle: null,
        currentWidth: Size[0],
        currentHeight: Size[1],
        currentValue: this.modelValue,
        currentTitle: this.title,
        currentLoading: false
      }
    },
    computed: {
      currentX() {
        const x = (window.innerWidth - this.currentWidth) / 2
        return parseSize(this.left, window.innerWidth, x)
      },
      currentY() {
        const y = (window.innerHeight - this.currentHeight) / 2
        return parseSize(this.top, window.innerHeight, Math.max(y - 50, y))
      },
      currentZ() {
        return getLayerIndex()
      }
    },
    methods: {
      onShow({ title } = {}) {
        this.currentValue = true
        this.currentTitle = title || this.currentTitle
        this.$emit('update:modelValue', true)
      },
      onHide() {
        if (!this.maskAllowOff) return
        this.onClose()
      },
      onCancel() {
        this.onClose()
        this.$emit('cancal')
      },
      onClose() {
        this.currentValue = false
        this.$emit('close')
        this.$emit('update:modelValue', false)
      },
      onResize() {
        this.parseWidth()
        this.parseHeight()
      },
      onResizing(x, y, w, h) {
        this.currentStyle = { x, y, w, h }
      },
      onSubmit() {
        this.currentLoading = true
        this.$emit('confirm', (err) => {
          if (err && err instanceof Error) {
            if (this.autoNotify) {
              const message = err ? err.message : '服务器错误, 请联系管理员'
              Tools.Notification({ type: 'error', title: '提示', message: message })
            }
          } else {
            if (this.autoNotify) {
              Tools.Notification({ type: 'success', title: '提示', message: '提交成功' })
            }
            this.onClose()
          }
          this.currentLoading = false
        })
      },
      parseWidth() {
        this.currentWidth = parseInt(parseSize(this.width, window.innerWidth, Size[0]))
      },
      parseHeight() {
        const height = parseSize(this.height, window.innerHeight, Size[1])
        if (this.maxHeight) {
          const maxHeight = parseSize(this.maxHeight, window.innerHeight)
          this.currentHeight = Math.min(maxHeight, height)
        } else {
          this.currentHeight = height
        }
      }
    },
    watch: {
      width: {
        immediate: true,
        handler() {
          this.parseWidth()
        }
      },
      height: {
        immediate: true,
        handler() {
          this.parseHeight()
        }
      },
      modelValue: {
        immediate: true,
        handler() {
          this.currentValue = this.modelValue
        }
      },
      title: {
        immediate: true,
        handler() {
          this.currentTitle = this.title
        }
      }
    },
    mounted() {
      this.throttle = throttle(this.onResize, 100, 300)
      window.addEventListener('resize', this.throttle)
      if (this.appendToBody) {
        document.body.appendChild(this.$el)
      }
    },
    unmounted() {
      window.removeEventListener('resize', this.throttle)
      if (this.appendToBody && this.$el && this.$el.parentNode) {
        this.$el.parentNode.removeChild(this.$el)
      }
    }
  }
</script>
