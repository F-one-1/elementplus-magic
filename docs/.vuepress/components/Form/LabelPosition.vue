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
  const type = typeof model
  console.log('demomodel',model,type)
  export default {
    data() {
      return {
        options: new model.Form({
          config: {
            rules:{
              desc: true
            },
            cols: 12,
            labelWidth: '80px',
            labelPosition: 'right'
          },
          columns: [
            { label: 'Textarea', field: 'desc', layout: 'Textarea', cols: 24 , required: true},
            { label: 'Textarea', field: 'desc', layout: 'Textarea', cols: 24 , placeholder: '你可以输入任何默认值' },
            { label: 'Text', field: 'number', layout: 'Text' },
            { label: 'Select', field: 'level', layout: 'Select', source: 'level' },
            { label: 'Date', field: 'date', layout: 'Date' },
            { label: 'Select', field: 'category', layout: 'Select', source: 'category', multiple: true },
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
        }),
      }
    },
    mounted() {
      console.log(1,this.options)
    },
  }
</script>
