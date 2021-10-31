<template>
  <el-date-picker
    v-model="currentValue"
    v-bind="currentProps"
    v-on="currentEvents"
  />
  <el-date-picker v-model="value1" type="date" placeholder="Pick a day"/>
</template>

<script>
  import basic from './basic.js'
  import { ref } from "@vue/reactivity";
  // import { ShortCuts } from '../../utils/shortcuts.js'

  export default {
    mixins: [basic],
    setup() {
      return {
        currentValue: ref([]),
        value1: ref('')
      }
    },
    computed: {
      currentProps() {
        // const { pickerOptions } = this.props
        return {
          // align: 'right',
          type: 'date',
          placeholder: `请选择${ this.currentLabel }`,
          // pickerOptions: Object.assign({ shortcuts: ShortCuts.date }, pickerOptions),
          // ...this.props
        }
      }
    }
  }
</script>
