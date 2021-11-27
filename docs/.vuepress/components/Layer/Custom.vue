<template>
  <div>
    <el-button
      @click="onShow"
      type="primary">
      打开弹框
    </el-button>
    <mg-layer
      width="90%"
      height="90%"
      :top="null"
      ref="layer">
      <mg-form :options="options"/>
    </mg-layer>
  </div>
</template>

<script>
  import { model } from '../../../../package/index.js'
  // import { model } from 'elementplus-magic'  (In you package ,you should use this one)
  // warning: you should use 'elementplus-magic',Not '../../../package/index'
  // because it is not exits,it is in my local file
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
