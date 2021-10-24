<template>
  <el-popover
    style="display: block;"
    placement="bottom-start"
    transition="el-zoom-in-top"
    popperClass="magic-treeselect"
    v-model="visible"
    ref="popover">
    <el-tree
      class="magic-treeselect-tree"
      v-bind="currentOptions"
      @check="onCheck"
      @current-change="onCurrentChange"
      :data="currentSource"
      :filterNodeMethod="onFilter"
      ref="tree"
    />
    <template
      v-if="!multiple">
      <div class="magic-treeselect-wrap">
        <el-input
          @compositionend="onComposition"
          @compositionstart="onComposition"
          :placeholder="currentLabel ? '' : placeholder"
          v-model="input"
          ref="input"
          clearable
        />
        <template v-if="!multiple && !input && !isOnComposition">
          <span
            @click.stop="onFocus"
            :class="currentSize ? `el-input--${ currentSize }` : ''"
            class="magic-treeselect-tree__label is-full">
            {{ currentLabel }}
          </span>
        </template>
      </div>
    </template>
    <template
      v-else>
      <div
        class="magic-treeselect-wrap"
        ref="reference">
        <el-input
          readonly
          placeholder=""
          ref="inputWrap"
        />
        <span
          class="magic-treeselect-tree__label is-tags"
          ref="tags">
          <el-tag
            disableTransitions
            size="small"
            type="info"
            v-for="(item, index) in currentTags"
            :key="index"
            closable
            @close="onCloseTag(item, index)">
            {{item.label}}
          </el-tag>
          <input
            class="magic-treeselect-tree__input"
            @keydown="resetInputState"
            @compositionend="onComposition"
            @compositionstart="onComposition"
            :style="inputStyle"
            v-model="input"
            autocomplete="off"
            debounce="0"
            type="text"
            ref="input"
          />
        </span>
      </div>
    </template>
  </el-popover>
</template>

<script>
  import { throttle } from '../../utils/throttle.js'

  export default {
    name: 'MgTreeselect',
    inject: {
      elFormItem: {
        default: ''
      }
    },
    props: {
      modelValue: {},
      source: {},
      size: {},
      props: {
        type: Object,
        default: () => ({
          label: 'label',
          value: 'value',
          children: 'children'
        })
      },
      multiple: {
        type: Boolean,
        default: false
      },
      showAllLevels: {
        type: Boolean,
        default: true
      },
      changeOnSelect: {
        type: Boolean,
        default: false
      },
      leafOnly: {
        type: Boolean,
        default: false
      },
      checkStrictly: {
        type: Boolean,
        default: false
      },
      placeholder: {
        type: String,
        default: ''
      }
    },
    computed: {
      _elFormItemSize () {
        return (this.elFormItem || {}).elFormItemSize
      },
      currentSize () {
        return this.size || this._elFormItemSize || (this.$ELEMENT || {}).size
      },
      currentValue: {
        get () {
          return !this.multiple ? this.modelValue : (this.modelValue || [])
        },
        set (val) {
          this.$emit('update:modelValue', val)
        }
      },
      currentOptions () {
        return {
          accordion: true,
          props: this.props,
          nodeKey: this.props.modelValue,
          multiple: this.multiple,
          expandOnClickNode: !this.multiple,
          checkOnClickNode: this.multiple,
          showCheckbox: this.multiple,
          highlightCurrent: !this.multiple,
          checkStrictly: this.checkStrictly,
          ...this.$attrs
        }
      },
      currentLabel () {
        if (!this.currentNode) return ''
        if (this.showAllLevels) {
          const fn = (results, node) => {
            if (node.parent) {
              results.unshift(node)
              fn(results, node.parent)
            }
            return results
          }
          const results = fn([], this.currentNode)
          return results.map(item => item.label).join(' / ')
        }
        return this.currentNode.label
      },
      currentSource () {
        return this.source || []
      },
      currentTags () {
        if (!this.currentCheckNodes) return []
        if (this.checkStrictly || this.leafOnly) return this.currentCheckNodes
        return this.currentCheckNodes.filter(item => item && !item.parent.checked)
      },
      inputStyle () {
        return {
          width: this.inputLength + 'px',
          maxWidth: (this.$refs.reference ? this.$refs.reference.getBoundingClientRect().width : 200) + 'px'
        }
      }
    },
    data () {
      return {
        input: '',
        visible: false,
        inputLength: 20,
        currentNode: null,
        currentCheckNodes: null,
        isOnComposition: false
      }
    },
    created () {
      this.setValue()
    },
    methods: {
      onFilter (value, data, node) {
        if (!value) return true
        const canShow = (node) => {
          if (!node.label) return false
          return node.label.indexOf(value) > -1 || (node.parent && canShow(node.parent))
        }
        return canShow(node)
      },
      resetInputHeight () {
        if (!this.multiple) return
        const fn = () => {
          this.$nextTick(() => {
            let height = this.$refs.tags.clientHeight
            let inputChildNodes = this.$refs.inputWrap.$el.childNodes
            let input = [].filter.call(inputChildNodes, item => item.tagName === 'INPUT')[0]
            if (input) input.style.height = Math.max(height, 36) + 'px'
          })
        }
        if (!this._throttleInstance) {
          this._throttleInstance = throttle(fn, 100)
        }
        this._throttleInstance()
      },
      resetInputState () {
        this.inputLength = this.$refs.input.value.length * 15 + 20
      },
      onCloseTag (item) {
        this.$refs.tree.setChecked(item.key, false, true)
        let node = this.$refs.tree.getNode(item.key)
        const fn = (node) => {
          let index = this.currentCheckNodes.findIndex(v => v.key === node.key)
          if (index > -1) {
            this.currentCheckNodes.splice(index, 1)
          }
          node.childNodes.forEach(fn)
        }
        fn(node)
        this.currentValue = this.currentCheckNodes.map(v => v.key)
        this.resetInputHeight()
      },
      onComposition (event) {
        this.isOnComposition = event.type !== 'compositionend'
      },
      onFocus () {
        this.visible = true
        this.$refs.input.focus()
        this.multiple && this.$refs.inputWrap.focus()
      },
      onClear () {
        this.input = ''
        this.visible = true
        this.resetInputHeight()
      },
      onCheck (data, { checkedNodes }) {
        if (this.multiple) {
          this.input = ''
          this.onFocus()
          let { children, modelValue } = this.props
          let nodes = []
          nodes = checkedNodes.reduce((results, item) => {
            if (this.leafOnly) {
              if (!item[children]) {
                results.push(item[modelValue])
              }
            } else {
              results.push(item[modelValue])
            }
            return results
          }, [])
          this.currentValue = nodes
          this.currentCheckNodes = nodes.map(item => this.$refs.tree.getNode(item))
          this.resetInputHeight()
        }
      },
      onCurrentChange (data, node) {
        if (!this.multiple) {
          if (this.changeOnSelect || node.isLeaf) {
            this.input = ''
            this.onFocus()
            this.currentNode = node
            this.currentValue = node.key
          }
          if (node.isLeaf) {
            this.visible = false
          }
        }
      },
      setValue () {
        this.$nextTick(() => {
          if (this.multiple) {
            this.$refs.tree.setCheckedKeys(this.currentValue || [], this.leafOnly)
            if (this.currentValue) {
              this.currentCheckNodes = this.currentValue.map(item => this.$refs.tree.getNode(item))
            }
            this.resetInputHeight()
          } else {
            if (this.currentValue) {
              this.currentNode = this.$refs.tree.getNode(this.currentValue)
            } else {
              this.currentNode = null
            }
          }
        })
      }
    },
    watch: {
      currentValue () {
        this.setValue()
        this.resetInputHeight()
      },
      currentSource () {
        this.setValue()
        this.resetInputHeight()
      },
      input (val) {
        this.resetInputState()
        this.resetInputHeight()
        this.$refs.tree.filter(val)
      }
    }
  }
</script>
