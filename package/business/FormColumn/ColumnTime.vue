<template>
  <el-time-picker
    v-model="currentValue"
    v-bind="currentProps"
    v-on="currentEvents"
    style="width:100%"
  />
</template>

<script>
  import basic from './basic.js'
  import { ref,defineComponent } from "vue";

  export default defineComponent({
    mixins: [basic],
    setup() {
      return {
        currentValue: ref([])
      }
    },
    computed: {
      currentProps() {
        return {
          placeholder: `请选择${ this.currentLabel }`,
          ...this.props
        }
      }
    }
  })
</script>
