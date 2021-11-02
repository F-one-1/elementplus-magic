<template>
  <div>
    <el-button
      @click="onShow"
      type="primary">
      打开弹框
    </el-button>
    <mg-layer 
      ref="layer">
      <mg-form :options="options"/>
    </mg-layer>
  </div>
</template>

<script>
  import { model } from '../package/index.js'

  export default {
    data() {
      return {
        options: new model.Form({
          columns: [
            { label: '隐患单号', field: 'number', layout: 'Text' },
            { label: '隐患内容', field: 'content', layout: 'Text' },
            { label: '检查时间', field: 'date', layout: 'Date' },
            { label: '隐患级别', field: 'level', layout: 'Date' }
          ],
          events: {
            cancel: () => this.$refs.layer.onClose(),
            submit: (form, done) => {
              setTimeout(done, 1000)
            }
          }
        })
      }
    },
    methods: {
      onShow() {
        this.$refs.layer.onShow({ title: '创建' })
      }
    }
  }
</script>