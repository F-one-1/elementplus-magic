<template>
  <div
    class="magic-formColumn-switch"
    :class="`is-${ currentProps.align }`">
    <el-switch
      v-model="currentValue"
      v-bind="currentProps"
      v-on="currentEvents"
    />
    <label
      v-if="currentProps.title"
      :class="{'is-active': currentValue }"
      class="magic-formColumn-switch-title">
      {{ currentValue ? currentProps.activeTitle: currentProps.title }}
    </label>
  </div>
</template>

<script>
  import basic from './basic.js'
  import { ref,defineComponent } from "vue";
  export default defineComponent({
    mixins: [basic],
    setup() {
      return {
        currentValue: ref('')
      }
    }
  })
</script>
