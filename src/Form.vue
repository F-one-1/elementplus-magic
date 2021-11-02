<template>
  <div class="code">
    <div class="code-content">
      <mg-form :options="options"/>
    </div>
  </div>
</template>
<style scoped>
.code {
  margin: 20px;
  border: 1px solid #ebebeb;
  overflow: hidden;
  max-width: 750px;
}
.code-content{
  padding: 15px;
}
</style>
<script>
  import { model } from '../package/index.js'
  import data from './data.js'

  export default {
    data() {
      return {
        options: new model.Form({
          config: {
            cols: 12
          },
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
              console.log('提交按钮带点击')
              console.log(form)
              setTimeout(done, 1000)
            }
          }
        })
      }
    }
  }
</script>