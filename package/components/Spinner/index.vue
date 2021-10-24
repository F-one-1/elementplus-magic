<template>
  <span
    class="magic-spinner"
    :class="[`magic-spinner__${type}`]"
    :style="styles"
  />
</template>

<script>
  import Spinner from './spinner'

  export default {
    name: 'MgSpinner',
    mounted () {
      Spinner(this.$el, this.type, this.size)
    },
    props: {
      type: {
        type: String,
        default: 'ios-small'
      },
      size: {
        type: String,
        default: '28px'
      },
      color: {
        type: String,
        default: null
      }
    },
    computed: {
      styles () {
        return {
          width: this.size,
          height: this.size,
          stroke: this.color,
          fill: this.color
        }
      }
    }
  }
</script>
