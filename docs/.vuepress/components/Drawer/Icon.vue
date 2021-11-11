<template>
  <div>
    <el-button
      @click="value = !value"
      type="primary">
      Open
    </el-button>
    <mg-drawer
      title="Basic Drawer"
      v-model="value"
      showIcon>
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
