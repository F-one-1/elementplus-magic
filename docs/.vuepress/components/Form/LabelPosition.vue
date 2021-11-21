<template>
  <mg-form :options="options"/>
</template>

<script>
  import { model } from '../../../../package/index'
  import data from './data.js'
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
