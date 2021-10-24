<template>
  <mg-select
    style="width: 240px;"
    v-model="select"
    :source="source"
    collapse-tags
    multiple
  />
</template>

<script>
  export default {
    data() {
      return {
        select: [],
        source: [
          {
            label: '一级隐患',
            value: 1
          },
          {
            label: '二级隐患',
            value: 2
          },
          {
            label: '三级隐患',
            value: 3
          },
          {
            label: '四级隐患',
            value: 4
          }
        ]
      }
    }
  }
</script>