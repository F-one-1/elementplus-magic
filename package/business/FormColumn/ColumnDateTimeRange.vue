<template>
  <el-date-picker
    v-model="currentValue"
    v-bind="currentProps"
    v-on="currentEvents"
  />
</template>

<script>
  import merge from 'lodash/merge'
  import basic from './basic.js'
  import { ShortCuts } from '../../utils/shortcuts.js'

  export default {
    mixins: [basic],
    computed: {
      currentProps() {
        return merge({
          align: 'right',
          type: 'datetimerange',
          rangeSeparator: '至',
          startPlaceholder: '开始时间',
          endPlaceholder: '结束时间',
          pickerOptions: {
            shortcuts: ShortCuts.dateRange
          }
        }, this.props)
      }
    }
  }
</script>
