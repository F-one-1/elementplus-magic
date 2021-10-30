<template>
  <el-row :gutter="gutter" v-for="column in columns" :key="column">
    <el-col 
        :span="getCols(column.config)"
        :style="column.config.colStyle"
        class="magic-form-col">
        <el-form-item
          :style="column.config.formItemStyle"
          :labelWidth="column.config.labelWidth"
          :label="column.config.label"
          :prop="column.config.field">
          <mg-form-column
            :style="column.config.style || column.config.width || '100%'"
            :onInput="oninput"
            :source="getSource(column.config)"
            :modelValue="getValue(column.config)"
            :layout="column.config.layout"
            :events="column.events"
            :prop="column.props"
          />
        </el-form-item>
      </el-col>
    </el-row>
</template>
<script>
import MgFormColumn from '../FormColumn/index.vue'
// import Column from '../../model/Column.js'
export default {
  name: 'FormColumns',
  components: {
      MgFormColumn
  },
  props: {
    cols: {},
    store: {},
    gutter: {},
    panels: {},
    columns: {}
  },
  methods: {
    setValue ({ field }, val) {
      return this.store.setValue(field, val)
    },
    getCols ({ cols }) {
      return cols || this.cols
    },
    getSource ({ source }) {
      const data = source ? this.store.getSource(source) : []
      return data || []
    },
    getValue ({ field }) {
      return this.store.getValue(field)
    },
    oninput (){
      return ''
    },
    // renderColumns () {
    //   const columns = this.getColumns()
    //   return columns.map(item => item.vNode)
    // },
    // getColumns () {
    //   console.log(this.columns)
    //   return this.columns
    // }
  }
}
</script>