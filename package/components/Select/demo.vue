<template>
<div>1</div>
  <el-select
    class="magic-select"
    :multiple="multiple"
    v-model="currentValue"
    v-bind="$attrs"
    >
    <template v-if="multiple">
      <div
        class="magic-select-all"
        @click="onSelect">
        <span>全选</span>
        <el-checkbox
          @click.stop
          :value="isCheckAll"
          :indeterminate="isIndeterminate"
          @change="onChange"
        />
      </div>
      <div class="magic-select-wrap">
        <el-option
          v-for="(item, index) in source"
          :label="getLabel(item)"
          :value="getValue(item)"
          :disabled="item.disabled"
          :key="index">
          <slot
            :row="item"
            :index="index">
            {{ getLabel(item) }}
          </slot>
        </el-option>
      </div>
    </template>
    <template v-else>
      <el-option
        v-for="(item, index) in source"
        :label="getLabel(item)"
        :value="getValue(item)"
        :disabled="item.disabled"
        :key="index">
        <slot
          :row="item"
          :index="index">
          {{ getLabel(item) }}
        </slot>
      </el-option>
    </template>
  </el-select>
</template>
<script>
import get from 'lodash/get'
import { computed } from '@vue/reactivity'
export default {
  name: 'MgSelect',
  emits: ['click.stop'],
  props: {
    value: {},
    source: {
        type: Array,
        default: () => []
      },
      multiple: {
        type: Boolean,
        default: false
      },
      labelKey: {
        type: String,
        default: 'label'
      },
      outputKey: {
        type: String,
        default: 'value'
      }
  },
  setup(props,{emit}) {
    var currentValue = computed({
      get() {
        if (!props.multiple) return props.value
        return props.value || []
      },
      set(val) {
        emit('input', val)
      }
    })
    const isIndeterminate = computed(()=>{
      if (!props.multiple) return false
      if (currentValue.length === 0) return false
      return currentValue.length !== props.source.length
    })
    const isCheckAll = computed(()=>{
      if (!props.multiple) return false
      return currentValue.length === props.source.length
    })
    const getLabel = ((item) => {
      return props.labelKey ? get(item, props.labelKey) : item
    })
    var getValue = ((item) => {
      return props.outputKey ? get(item, props.outputKey) : item
    })
    const onSelect = (() => {
      onChange(!isCheckAll)
    })
    const onChange = ((val) => {
      let source = props.source.map(this.getValue.bind(this))
      console.log(source)
      console.log(val)
      currentValue = val ? source : []
      // currentValue = val ? source : []
    })
    return {
      currentValue,
      isIndeterminate,
      isCheckAll,
      getLabel,
      getValue,
      onSelect,
      onChange
    }
  }
}
</script>