<template>
  <div>
    <el-button
      @click="value = !value"
      type="primary">
      Open
    </el-button>
    <mg-drawer
      title="Basic Drawer"
      width="800px"
      position="right"
      bodyStyle=""
      v-model="value">
      <mg-form
        :options="options"
      />
    </mg-drawer>
  </div>
</template>
<script>
  import data from './data.js'
  import { model } from '../package/index.js'

  export default {
    data() {
      return {
        value: false,
        options: new model.Form({
          config: {
            cols: 12
          },
          columns: [
            { label: '隐患内容', field: 'desc', layout: 'Textarea', cols: 24 },
            { label: '隐患单号', field: 'number', layout: 'Text' },
            { label: '隐患类别', field: 'category', layout: 'Select', source: 'category' },
            { label: '隐患级别', field: 'level', layout: 'Radio', source: 'level', type: 'button' },
            { label: '检查形式', field: 'mode', layout: 'Checkbox', source: 'mode' },
            { label: '检查日期', field: 'inspect_time', layout: 'Date' },
            { label: '检查部门', field: 'inspect_department', layout: 'TreeSelect', source: 'department', multiple: true },
            { label: '整改期限', field: 'end_time', layout: 'DateTime' },
            { label: '整改部门', field: 'department', layout: 'Cascader', source: 'department' },
            { label: '处罚金额', field: 'cost', layout: 'Number' },
            { label: '选择时间', field: 'time', layout: 'Time' },
            { label: '配置颜色', field: 'color', layout: 'ColorPicker' },
            { label: '是否显示', field: 'visiable', layout: 'Switch' },
            { label: '显示级别', field: 'zoom', layout: 'Slider', cols: 24 },
            { label: '输入建议', field: 'suggestions', layout: 'AutoComplete', source: 'suggestions' },
            { label: '选择年份', field: 'year', layout: 'DateYear' },
            { label: '选择月份', field: 'month', layout: 'DateMonth' },
            { label: '日期区间', field: 'dateRange', layout: 'DateRange' },
            { label: '月份区间', field: 'dateMonthRange', layout: 'DateMonthRange' },
            { label: '时间区间', field: 'timeRange', layout: 'TimeRange' }
          ],
          events: {
            init: () => {
              this.options.setSource('mode', data.mode)
              this.options.setSource('category', data.category)
              this.options.setSource('level', data.level)
              this.options.setSource('department', data.department)
              this.options.setSource('suggestions', data.suggestions)
            },
            submit(form, done) {
              setTimeout(done, 1000)
            }
          }
        })
      }
    }
  }
</script>