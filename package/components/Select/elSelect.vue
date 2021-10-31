<template>
  <el-select
    class="magic-select"
    :multiple="multiple"
    v-model="currentValue"
    v-bind="$attrs">
    <template v-if="multiple">
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

  export default {
    name: 'MgSelect',
    props: {
      value: {},
      // 绑定值
      source: {
        type: Array,
        default: () => []
      },
      multiple: {
        type: Boolean,
        default: false
      },
      // 是否多选
      labelKey: {
        type: String,
        default: 'label'
      },
      outputKey: {
        type: String,
        default: 'value'
      }
    },
    computed: {
      currentValue: {
        get() {
          if (!this.multiple) return this.value
          return this.value || []
        },
        set(val) {
          this.$emit('input', val)
        }
      },
      isIndeterminate() {
        if (!this.multiple) return false
        if (this.currentValue.length === 0) return false
        return this.currentValue.length !== this.source.length
      },
      isCheckAll() {
        if (!this.multiple) return false
        return this.currentValue.length === this.source.length
      }
    },
    methods: {
      getLabel(item) {
        return this.labelKey ? get(item, this.labelKey) : item
      },
      getValue(item) {
        return this.outputKey ? get(item, this.outputKey) : item
      },
      onSelect() {
        this.onChange(!this.isCheckAll)
      },
      onChange(val) {
        let source = this.source.map(this.getValue.bind(this))
        this.currentValue = val ? source : []
        console.log(source)
        console.log(val)
      }
    }
  }
</script>
