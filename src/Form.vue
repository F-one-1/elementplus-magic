<template>
  <div v-for="item in [1,2,3]" :key="item">
    <div>
      {{item}}
    </div>
  </div>
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
          columns: [
            { label: '隐患内容', field: 'desc', layout: 'Textarea' },
            { label: '隐患单号', field: 'number', layout: 'Text' },
            { label: '隐患级别', field: 'level', layout: 'Radio', source: 'level', type: 'button' },
            { label: '检查时间', field: 'date', layout: 'Date' },
            { label: '隐患类别', field: 'category', layout: 'Select', source: 'category', multiple: true },
            { label: '整改部门', field: 'department', layout: 'TreeSelect', source: 'department' },
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