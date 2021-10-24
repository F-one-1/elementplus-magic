<template>
  <div class="magic-formColumn-coordinate">
    <div
      class="magic-formColumn-coordinate-wrap"
      :class="{ 'is-active': active }"
    >
      <el-input
        class="magic-formColumn-coordinate-input"
        @input="(val) => setValue('x', val)"
        @focus="onFocus"
        @blur="onBlur"
        :value="getValue('x')"
        :disbaled="disabled"
        placeholder="坐标X"
        type="number"
      />
      <span>,</span>
      <el-input
        class="magic-formColumn-coordinate-input"
        @input="(val) => setValue('y', val)"
        @focus="onFocus"
        @blur="onBlur"
        :value="getValue('y')"
        :disbaled="disabled"
        placeholder="坐标Y"
        type="number"
      />
      <template v-if="showZ">
        <span>,</span>
        <el-input
          class="magic-formColumn-coordinate-input"
          @input="(val) => setValue('z', val)"
          @focus="onFocus"
          @blur="onBlur"
          :value="getValue('z')"
          :disbaled="disabled"
          placeholder="坐标Z"
          type="Number"
        />
      </template>
    </div>
    <div
      v-if="icon"
      class="magic-formColumn-coordinate-append"
      @click="onPicker"
    >
      <i :class="icon" />
    </div>
  </div>
</template>

<script>
import basic from "./basic.js";
import { computed } from '@vue/reactivity';
import { emitEvent } from "../../utils/emitEvent";

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
    disabled() {
      return this.currentProps.disabled;
    },
    showZ() {
      return this.currentProps.showZ;
    },
    icon() {
      return this.currentProps.icon;
    },
    fixedNumber() {
      return this.currentProps.fixedNumber || 2;
    },
  },
  data() {
    return {
      active: false,
    };
  },
  methods: {
    getValue(field) {
      let val = this.currentValue[field] || 0;
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
    setValue(field, val = 0) {
      this.currentValue = { ...this.currentValue, [field]: val };
    },
    onPicker(e) {
      emitEvent(this.currentEvents, "picker", e);
    },
    onFocus() {
      this.active = true;
    },
    onBlur() {
      this.active = false;
    },
  },
};
</script>
