<template>
  <el-date-picker
    v-model="currentValue"
    v-bind="currentProps"
    v-on="currentEvents"
  />
</template>

<script>
  import basic from './basic.js'
  import { ShortCuts } from '../../utils/shortcuts.js'

  export default {
    mixins: [basic],
    computed: {
      currentProps() {
        const { pickerOptions } = this.props
        return {
          align: 'right',
          type: 'date',
          placeholder: `请选择${ this.currentLabel }`,
          pickerOptions: Object.assign({ shortcuts: ShortCuts.date }, pickerOptions),
          ...this.props
        }
      }
    }
  }
</script>
