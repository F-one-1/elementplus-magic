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
          'create:true': () => {
            console.log('点击了创建')
          },
          'edit:true': () => {
            console.log('点击了编辑')
          },
          'delete:true': () => {
            console.log('点击了删除')
          }
        }
      }
    }
  }
</script>
