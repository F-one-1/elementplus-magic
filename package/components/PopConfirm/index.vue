<template>
  <el-popover
    placement="top-start"
    title="Title"
    :width="200"
    trigger="hover"
    content="this is content, this is content, this is content"
  >
    <template #reference>
      <el-button>Hover to activate</el-button>
    </template>
  </el-popover>
  <el-popover
    :width="width"
    :placement="placement"
    trigger="manual"
    v-bind="$attrs"
    v-model="visiable"
  >
    <div class="magic-popover-confirm-panel">
      <div class="magic-popover-confirm-title">{{ title }}</div>
      <p class="magic-popover-confirm-content">{{ content }}</p>
      <div class="magic-popover-confirm-btn">
        <el-button size="mini" type="text" @click="onCancel"> 取消 </el-button>
        <el-button size="mini" type="primary" @click="onConfirm">
          确定
        </el-button>
      </div>
    </div>
    <span @click="onShow">
      <slot />
    </span>
  </el-popover>
</template>

<script>
export default {
  name: "MgPopoverConfirm",
  props: {
    title: {
      type: String,
      default: "提示",
    },
    content: {
      type: String,
      default: "您确定要提交嘛？",
    },
    width: {
      type: Number,
      default: 180,
    },
    placement: {
      type: String,
      default: "top",
    },
    validate: {
      type: Function,
      default: null,
    },
  },
  data() {
    return {
      visiable: false,
    };
  },
  methods: {
    onShow() {
      if (this.validate) {
        this.validate(() => (this.visiable = true));
      } else {
        this.visiable = true;
      }
    },
    onCancel(e) {
      this.visiable = false;
      this.$emit("cancel", e);
    },
    onConfirm(e) {
      this.visiable = false;
      this.$emit("confirm", e);
    },
  },
};
</script>
