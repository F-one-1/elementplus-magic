import { computed } from '@vue/reactivity'
export default {
  props: {
    props: {},
    events: {},
    source: {},
    modelValue: {}
  },
  setup(props,context) {
    // const currentValue1 = computed
    const currentValue = computed({
      get: () => props.modelValue,
      set: val => {
        context.emit('update:modelValue',val)
      }
    })
    return {
      currentValue
    }
  },
  computed: {
    // currentValue: {
    //   get() {
    //     return this.value
    //   },
    //   set(val) {
    //     this.$emit('input', val)
    //   }
    // },
    currentLabel() {
      return this.props && this.props._label
    },
    currentEvents() {
      return this.events
    },
    currentProps() {
      return this.props
    }
  }
}
