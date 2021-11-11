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
    name: 'simple',
    data() {
      return {
        value: false
      }
    }
  }
</script>
