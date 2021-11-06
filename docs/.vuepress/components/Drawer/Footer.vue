<template>
  <div>
    <el-button
      @click="value = !value"
      type="primary">
      Open
    </el-button>
    <mg-drawer
      title="Basic Drawer"
      v-model="value">
      <template v-slot:footer>
        <el-button
          size="small">
          取消
        </el-button>
        <el-button
          size="small"
          type="primary">
          确定
        </el-button>
      </template>
      <template v-slot:body>
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
      </template>
    </mg-drawer>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        value: false
      }
    }
  }
</script>
