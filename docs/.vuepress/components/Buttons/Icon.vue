<template>
  <mg-buttons
    layout="icon"
    :buttons="buttons"
  />
</template>

<script>
  export default {
    data() {
      return {
        buttons: {
          create: () => {
            console.log('点击了创建')
          },
          edit: () => {
            console.log('点击了编辑')
          },
          delete: () => {
            console.log('点击了删除')
          }
        }
      }
    }
  }
</script>
