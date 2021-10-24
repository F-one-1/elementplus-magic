<template>
  <div class="magic-autoLoading">
    <slot
      v-if="loaded"
    />
    <Spinner
      class="magic-autoLoading-spinner"
      :class="`is-${ position }`"
      v-bind="$attrs"
      v-else
    />
  </div>
</template>

<script>
  import Spinner from '../Spinner/index.vue'

  const Hook = {
    activeated: 'activeated',
    created: 'created'
  }

  export default {
    name: 'MgAutoLoading',
    components: { Spinner },
    props: {
      hook: {
        type: String,
        default: Hook.created
      },
      always: {
        type: Boolean,
        default: true
      },
      position: {
        type: String,
        default: 'top'
      }
    },
    data() {
      return {
        loaded: false
      }
    },
    created() {
      this.hook === Hook.created && this.onLoading()
    },
    activated() {
      this.hook === Hook.activeated && this.onLoading()
    },
    methods: {
      onLoading() {
        this.always && (this.loaded = false)
        this.$emit('load', () => (this.loaded = true))
      }
    }
  }
</script>
