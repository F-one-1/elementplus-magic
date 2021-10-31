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
  import { ref } from "@vue/reactivity";
  import MgSelect from '../../components/Select/elSelect.vue'

  export default {
    mixins: [basic],
    components: { MgSelect },
    setup(){
      return {
        currentValue: ref([]),
        // source: ref([])
      }
    },
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
