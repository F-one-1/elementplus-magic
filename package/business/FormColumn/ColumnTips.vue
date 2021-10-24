<template>
  <div class="magic-formColumn-tips">
    <i
      v-if="currentProps.showIcon"
      class="el-icon-warning-outline"
    />
    {{ currentProps.title }}
    <br/>
    {{ currentProps.content }}
  </div>
</template>

<script>
  import basic from './basic.js'

  export default {
    mixins: [basic]
  }
</script>
