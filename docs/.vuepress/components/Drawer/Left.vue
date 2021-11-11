<template>
  <div>
    <el-button
      @click="value = !value"
      type="primary">
      Open
    </el-button>
    <mg-drawer
      title="Basic Drawer"
      position="left"
      v-model="value">
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
