<template>
  <mg-buttons :buttons="buttons"/>
</template>

<script>
  export default {
    data() {
      return {
        buttons: {
          create: () => {
            console.log('点击了创建')
          },
          delete: () => {
            console.log('点击了删除')
          },
          'divider:1': null,
          import: () => {
            console.log('点击了导入')
          },
          export: () => {
            console.log('点击了导出')
          },
          'divider:2': null,
          sync: () => {
            console.log('点击了同步')
          }
        }
      }
    }
  }
</script>
