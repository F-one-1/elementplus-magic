<template>
  <div class="magic-formColumn-button">
    <el-button
      v-on="currentEvents"
      v-bind="currentProps">
      <template v-if="currentProps.btnText">
        {{ currentProps.btnText }}
      </template>
    </el-button>
  </div>

</template>

<script>
  import basic from './basic.js'

  export default {
    mixins: [basic],
    computed: {
      currentProps () {
        return {
          type: 'primary',
          ...this.props
        }
      }
    }
  }
</script>
