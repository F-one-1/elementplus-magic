<template>
  <el-divider
    class="magic-formColumn-divider"
    v-bind="currentProps"
    v-on="currentEvents">
    <template v-if="currentProps.title">
      {{ currentProps.title }}
    </template>
  </el-divider>
</template>

<script>
  import basic from './basic.js'

  export default {
    mixins: [basic]
  }
</script>
