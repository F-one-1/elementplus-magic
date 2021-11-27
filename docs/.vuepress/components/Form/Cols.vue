<template>
  <mg-form :options="options"/>
</template>

<script>
  import { model } from '../../../../package/index'
  // import { model } from 'elementplus-magic'  (In you package ,you should use this one)
  // warning: you should use 'elementplus-magic',Not '../../../package/index'
  // because it is not exits,it is in my local file

  import data from './data.js'
  // data.js is also in my local file
  // Define your own data, or the data returned by the interface
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
            { label: 'demoInputNumber', field: 'InputNumber', layout: 'InputNumber' },
            { label: '隐患单号', field: 'number', layout: 'Text' },
            { label: '隐患Switch', field: 'number1', layout: 'Switch' },
            { label: 'ColorPicker', field: 'colorpicker', layout: 'ColorPicker' },
            // { label: 'slider', field: 'slider', layout: 'Slider' },
            { label: '隐患级别', field: 'level', layout: 'Radio', source: 'level', type: 'button' },
            { label: '检查时间', field: 'mydate', layout: 'Date' },
            { label: '隐患单号', field: 'number', layout: 'Text' },
            { label: '检查时间', field: 'date1', layout: 'DateRange' },
            { label: '隐患单号', field: 'number', layout: 'Text' },
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
              setTimeout(done, 1000)
            },
          }
        }),
      }
      // console.log(6,this.options)
    },
  }
</script>
