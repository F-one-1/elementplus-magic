<template>
  <el-radio-group
    class="magic-formColumn-radio"
    :class="{ 'is-flex': currentProps.flex }"
    v-model="currentValue"
    v-bind="currentProps"
    v-on="currentEvents">
    <component
      :is="currentLayout"
      v-for="(item, index) in source"
      :label="getValue(item)"
      :key="index">
      {{getLabel(item)}}
    </component>
  </el-radio-group>
</template>

<script>
  import basic from './basic.js'
  import get from 'lodash/get'

  export default {
    mixins: [basic],
    computed: {
      currentLabelKey() {
        return this.props.labelKey || 'label'
      },
      currentValueKey() {
        return this.props.valueKey || 'value'
      },
      currentLayout() {
        const type = this.props.type ? `-${ this.props.type }` : ''
        return 'el-radio' + type
      }
    },
    methods: {
      getLabel(val) {
        return get(val, this.currentLabelKey)
      },
      getValue(val) {
        return get(val, this.currentValueKey)
      }
    }
  }
</script>
