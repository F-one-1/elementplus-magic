<template>
  <el-select
    class="magic-select"
    :multiple="multiple"
    v-model="currentValue"
    v-bind="$attrs">
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

  export default {
    name: 'MgSelect',
    // emits: ['click'],
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
      }
    }
  }
</script>
