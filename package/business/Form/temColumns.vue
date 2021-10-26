<template>
  <div>
    
  </div>
</template>
<script>
import FormColumn from '../FormColumn/index.vue'
import Column from '../../model/Column.js'
export default {
  components: {
      FormColumn
  },
  props: {
    cols: {},
    store: {},
    gutter: {},
    panels: {},
    columns: {}
  },
}
</script>