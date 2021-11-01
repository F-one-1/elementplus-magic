<template>
  <mg-form :options="options"/>
</template>

<script>
  import { model } from '../../../../package/index'
  import data from './data.js'

  export default {
    data() {
      return {
        options: new model.Form({
          columns: [
            { label: '隐患类别', field: 'category', layout: 'Select', source: 'category', multiple: true },
            { label: '隐患内容', field: 'desc', layout: 'Textarea' },
            { label: '隐患单号', field: 'number', layout: 'Text' },
            { label: '隐患Switch', field: 'number1', layout: 'Switch' },
            { label: 'ColorPicker', field: 'colorpicker', layout: 'ColorPicker' },
            // { label: 'slider', field: 'slider', layout: 'Slider' },
            { label: '隐患级别', field: 'level', layout: 'Radio', source: 'level', type: 'button' },
            { label: '检查时间', field: 'mydate', layout: 'Date' },
            { label: '检查时间', field: 'date', layout: 'DateTime' },
            { label: '检查时间', field: 'date', layout: 'DateTimeRange' },
            { label: '隐患类别', field: 'category', layout: 'Select', source: 'category', multiple: true },
            { label: '整改部门', field: 'department', layout: 'Cascader', source: 'department' },
          ],
          events: {
            init: () => {
              this.options.setSource('category', data.category)
              this.options.setSource('level', data.level)
              this.options.setSource('department', data.department)
            },
            submit: (form, done) => {
              setTimeout(done, 1000)
            }
          }
        })
      }
    }
  }
</script>
