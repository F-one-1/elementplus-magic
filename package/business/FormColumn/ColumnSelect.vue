<template>
  <mg-select
    :source="source"
    v-model="currentValue"
    v-bind="currentProps"
    v-on="currentEvents"
  />
</template>

<script>
  import basic from './basic.js'
  import MgSelect from '../../components/Select/demo.vue'

  export default {
    mixins: [basic],
    components: { MgSelect },
    computed: {
      currentProps () {
        return {
          placeholder: `请选择${ this.currentLabel }`,
          clearable: true,
          filterable: true,
          ...this.props
        }
      }
    }
  }
</script>
