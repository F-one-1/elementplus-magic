<template>
  <mg-buttons :buttons="buttons"/>
</template>

<script>
  export default {
    data() {
      return {
        buttons: {
          'approve:审 批': () => {},
          divider: null,
          'create:true': () => {
            console.log('点击了创建')
          },
          delete: () => {
            console.log('点击了删除')
          }
        }
      }
    }
  }
</script>
