<template>
<div>1</div>
  <mg-popover-confirm
    @confirm="onConfirm"
    content="您确定要删除吗？">
    <el-button type="danger">删除</el-button>
  </mg-popover-confirm>
</template>

<script>
  export default {
    methods: {
      onConfirm(e) {
        console.log('点击了确认', e)
      }
    }
  }
</script>