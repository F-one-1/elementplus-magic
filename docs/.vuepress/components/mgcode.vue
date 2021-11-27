<template>
  <div class="code">
    <div class="code-content" v-if="component">
      <component :is="currentLayout" />
    </div>
  </div>
</template>

<script>
export default {
  name: 'mycode',
  props: {
      tag: {
        type: String,
        default: 'Form/Simple'
      },
      component: {
        type: Boolean,
        default: true
      },
      suffix: {
        type: String,
        default: 'vue'
      },
  },
  data() {
      return {
        isShow: !this.component,
      }
    },
    computed: {
      codeTextBtn() {
        return this.isShow ? '隐藏代码' : '显示代码'
      },
      currentLayout() {
        return require('./' + this.tag + '.' + this.suffix).default
      },
      currentCode() {
        return require('!!text-loader!./' + this.tag + '.' + this.suffix)
      }
    },
    methods: {
      onToggle() {
        this.isShow = !this.isShow
      }
  }
}
</script>

<style scoped>
.code {
  margin: 20px 0;
  border: 1px solid #ebebeb;
  overflow: hidden
}
.code:hover {
  box-shadow: 0 0 8px 0 rgba(232, 237, 250, .6), 0 2px 4px 0 rgba(232, 237, 250, .5)
}
.code .code-content {
  padding: 15px;
  border-bottom: 1px solid #ebebeb
}
.code .code--button {
  width: 100%;
  color: #3eaf7c;
  font-weight: 400;
  line-height: 40px;
  text-align: center;
  cursor: pointer;
  box-shadow: 0 0 8px 0 rgba(232, 237, 250, 0.6), 0 2px 4px 0 rgba(232, 237, 250, 0.5);
}

.code .code--button:hover{
  font-size: 17px;
  background: #fafbfc
}

.code .code--segment{
  margin: 0 15px
}
</style>

