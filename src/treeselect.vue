<template>
  <mg-treeselect
    :props="props"
    :source="source"
    v-model="select"
  />
</template>

<script>
  import tree from './tree.js'

  export default {
    data() {
      return {
        source: tree,
        props: {
          value: 'id',
          label: 'title',
          children: 'children'
        },
        select: 'shejiyuanze'
      }
    }
  }
</script>