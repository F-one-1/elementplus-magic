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
          columns: [
            { label: '多项选择', field: 'category', layout: 'Select', source: 'category', multiple: true , placeholder: ' '},
            { label: '多行文本', field: 'desc', layout: 'Textarea', placeholder: '你可以设置你所需要的placeholder,也可以使用默认值'},
            { label: '单行文本', field: 'number', layout: 'Text' },
            { label: 'Switch', field: 'number1', layout: 'Switch' },
            { label: 'ColorPicker', field: 'colorpicker', layout: 'ColorPicker' },
            // { label: 'slider', field: 'slider', layout: 'Slider' },
            { label: '级别选择', field: 'level', layout: 'Radio', source: 'level', type: 'button' },
            { label: 'Date', field: 'mydate', layout: 'Date' },
            { label: 'Time', field: 'mydate', layout: 'Time' , cols: 12},
            { label: 'TimeRange', field: 'mydate', layout: 'TimeRange' , cols: 12},
            { label: 'DateTime', field: 'date', layout: 'DateTime' },
            { label: 'DateTimeRange', field: 'date', layout: 'DateTimeRange' },
            { label: '单项选择', field: 'category', layout: 'Select', source: 'category', multiple: false },
            { label: '树形选择', field: 'department', layout: 'Cascader', source: 'department' },
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