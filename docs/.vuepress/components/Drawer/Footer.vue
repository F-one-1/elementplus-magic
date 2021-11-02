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
      <span slot="footer">
        <el-button
          size="small">
          取消
        </el-button>
        <el-button
          size="small"
          type="primary">
          确定
        </el-button>
      </span>
      <p>Some contents...</p>
      <p>Some contents...</p>
      <p>Some contents...</p>
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
