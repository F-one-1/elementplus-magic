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
          config: {
            cols: 12
          },
          columns: [
            { label: 'Textarea', field: 'desc', layout: 'Textarea', cols: 24 },
            { label: 'Textarea', field: 'desc', layout: 'Textarea', cols: 24 , placeholder: ' '},
            { label: 'Text', field: 'number', layout: 'Text' },
            { label: 'Radio', field: 'level', layout: 'Radio', source: 'level', type: 'button' },
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
            },
          }
        }),
      }
      // console.log(6,this.options)
    },
  }
</script>
