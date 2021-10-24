<template>
  <div class="magic-formColumn-coord">
    <el-input
      class="magic-formColumn-coord-item"
      type="Number"
      v-for="column in currentColumns"
      @input="(val) => setValue(column, val)"
      :value="getValue(column)"
      :style="currentStyle"
      :key="column"
    >
      <span class="magic-formColumn-coord-suffix">
        {{ column }}
      </span>
    </el-input>
  </div>
</template>

<script>
import basic from "./basic.js";
import { computed } from '@vue/reactivity';
import { emitEvent } from "../../utils";

export default {
  mixins: [basic],
  setup(props, context) {
    // const currentValue1 = computed
    const currentValue = computed({
      get: () => props.modelValue,
      set: (val) => {
        context.emit("update:modelValue", val);
      },
    });
    return {
      currentValue,
    };
  },
  computed: {
    // currentValue: {
    //   get () {
    //     return this.value || {}
    //   },
    //   set (val) {
    //     this.$emit('input', val)
    //   }
    // },
    currentStyle() {
      const width = this.currentProps.inputWidth;
      return { width };
    },
    currentColumns() {
      return this.currentProps.columns || ["x", "y", "z"];
    },
    fixedNumber() {
      return this.currentProps.fixedNumber || 2;
    },
  },
  methods: {
    getValue(field) {
      let val = Number(this.currentValue[field]) || 0;
      if (
        val.toString().split(".") &&
        val.toString().split(".")[1] &&
        val.toString().split(".")[1].length > this.fixedNumber
      ) {
        return Number(val.toFixed(this.fixedNumber));
      } else {
        return val;
      }
    },
    setValue(field, val) {
      this.currentValue = { ...this.currentValue, [field]: val };
      emitEvent(this.currentEvents, "change", this.currentValue);
    },
  },
};
</script>
