<template>
  <div class="code">
    <div
      class="code-content"
      v-if="component">
      <component :is="currentLayout"/>
    </div>
    <div
      class="code--segment"
      v-if="isShow">
      <highlightjs
        language="vue"
        :code="currentCode"
      />
    </div>
    <div
      class="code--button"
      @click="onToggle">
      {{ codeTextBtn }}
    </div>
  </div>
</template>

<script type="text/jsx">
import 'highlight.js/lib/common';
import hljsVuePlugin from "@highlightjs/vue-plugin";

  export default {
    name: 'Code',
    components: {
        highlightjs: hljsVuePlugin.component
    },
    props: {
      tag: {
        type: String,
        required: true
      },
      suffix: {
        type: String,
        default: 'vue'
      },
      component: {
        type: Boolean,
        default: true
      }
    },
    data() {
      return {
        isShow: !this.component
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

<style
  lang="stylus"
  scoped>
  @import "../styles/palette.styl"

  .code
    margin: 20px 0;
    border: 1px solid #ebebeb
    overflow: hidden

    &:hover
      box-shadow: 0 0 8px 0 rgba(232, 237, 250, .6), 0 2px 4px 0 rgba(232, 237, 250, .5)

    .code-content
      padding: 15px
      border-bottom: 1px solid #ebebeb

    .code--button
      width: 100%
      color: $accentColor
      font-weight: 400
      line-height: 40px
      text-align: center
      cursor: pointer
      box-shadow: 0 0 8px 0 rgba(232, 237, 250, 0.6), 0 2px 4px 0 rgba(232, 237, 250, 0.5)

      &:hover
        font-size: 17px
        background: #fafbfc

    .code--segment
      margin: 0 15px
      background-color: #282c34

</style>

