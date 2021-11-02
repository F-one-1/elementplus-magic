---
pageClass: markdown-page
---

# Layer

可拖拽，可拉伸的弹出框

### 基础用法

<mycode tag="Layer/Simple"/>

```vue
<template>
  <div>
    <el-button
      @click="onShow"
      type="primary">
      打开弹框
    </el-button>
    <mg-layer ref="layer">
      <mg-form :options="options"/>
    </mg-layer>
  </div>
</template>

<script>
  import { model } from 'magic'

  export default {
    data() {
      return {
        options: new model.Form({
          columns: [
            { label: '隐患单号', field: 'number', layout: 'Text' },
            { label: '隐患内容', field: 'content', layout: 'Text' },
            { label: '检查时间', field: 'date', layout: 'Date' },
            { label: '隐患级别', field: 'level', layout: 'Date' }
          ],
          events: {
            cancel: () => this.$refs.layer.onClose(),
            submit: (form, done) => {
              setTimeout(done, 1000)
            }
          }
        })
      }
    },
    methods: {
      onShow() {
        this.$refs.layer.onShow({ title: '创建' })
      }
    }
  }
</script>

```
### 禁止拖拽

<mycode tag="Layer/Draggable"/>

```vue
<template>
  <div>
    <el-button
      @click="onShow"
      type="primary">
      打开弹框
    </el-button>
    <mg-layer
      :draggable="false"
      ref="layer">
      <mg-form :options="options"/>
    </mg-layer>
  </div>
</template>

<script>
  import { model } from 'magic'

  export default {
    data() {
      return {
        options: new model.Form({
          columns: [
            { label: '隐患单号', field: 'number', layout: 'Text' },
            { label: '隐患内容', field: 'content', layout: 'Text' },
            { label: '检查时间', field: 'date', layout: 'Date' },
            { label: '隐患级别', field: 'level', layout: 'Date' }
          ],
          events: {
            cancel: () => this.$refs.layer.onClose()
          }
        })
      }
    },
    methods: {
      onShow() {
        this.$refs.layer.onShow({ title: '创建' })
      }
    }
  }
</script>

```
### 禁止拉伸

<mycode tag="Layer/Resizable"/>

```vue
<template>
  <div>
    <el-button
      @click="onShow"
      type="primary">
      打开弹框
    </el-button>
    <mg-layer
      :resizable="false"
      ref="layer">
      <mg-form :options="options"/>
    </mg-layer>
  </div>
</template>

<script>
  import { model } from 'magic'

  export default {
    data() {
      return {
        options: new model.Form({
          columns: [
            { label: '隐患单号', field: 'number', layout: 'Text' },
            { label: '隐患内容', field: 'content', layout: 'Text' },
            { label: '检查时间', field: 'date', layout: 'Date' },
            { label: '隐患级别', field: 'level', layout: 'Date' }
          ],
          events: {
            cancel: () => this.$refs.layer.onClose()
          }
        })
      }
    },
    methods: {
      onShow() {
        this.$refs.layer.onShow({ title: '创建' })
      }
    }
  }
</script>

```
### 关闭遮罩

<mycode tag="Layer/HideMask"/>

```vue
<template>
  <div>
    <el-button
      @click="onShow"
      type="primary">
      打开弹框
    </el-button>
    <mg-layer
      :showMask="false"
      ref="layer">
      <mg-form :options="options"/>
    </mg-layer>
  </div>
</template>

<script>
  import { model } from 'magic'

  export default {
    data() {
      return {
        options: new model.Form({
          columns: [
            { label: '隐患单号', field: 'number', layout: 'Text' },
            { label: '隐患内容', field: 'content', layout: 'Text' },
            { label: '检查时间', field: 'date', layout: 'Date' },
            { label: '隐患级别', field: 'level', layout: 'Date' }
          ],
          events: {
            cancel: () => this.$refs.layer.onClose()
          }
        })
      }
    },
    methods: {
      onShow() {
        this.$refs.layer.onShow({ title: '创建' })
      }
    }
  }
</script>

```
### 定制宽高

<mycode tag="Layer/Custom"/>

```vue
<template>
  <div>
    <el-button
      @click="onShow"
      type="primary">
      打开弹框
    </el-button>
    <mg-layer
      width="90%"
      height="90%"
      :top="null"
      ref="layer">
      <mg-form :options="options"/>
    </mg-layer>
  </div>
</template>

<script>
  import { model } from 'magic'

  export default {
    data() {
      return {
        options: new model.Form({
          columns: [
            { label: '隐患单号', field: 'number', layout: 'Text' },
            { label: '隐患内容', field: 'content', layout: 'Text' },
            { label: '检查时间', field: 'date', layout: 'Date' },
            { label: '隐患级别', field: 'level', layout: 'Date' }
          ],
          events: {
            cancel: () => this.$refs.layer.onClose(),
            submit: (form, done) => {
              setTimeout(done, 1000)
            }
          }
        })
      }
    },
    methods: {
      onShow() {
        this.$refs.layer.onShow({ title: '创建' })
      }
    }
  }
</script>

```
### Attributes

| name           | default | desc                      
|----------------|---------|-------------
| title          |         | 弹框标题       
| value/v-model  |         | 是否显示弹框，支持双向绑定           
| width          |   46%   | 弹框宽度            
| height         |   400   | 弹框高度           
| top            |   12%   | 弹框y坐标           
| left           |         | 弹框x坐标 默认居中显示        
| zIndex         |   100   | 弹框层级        
| minWidth       |   480   | 最小宽度        
| minHeight      |   300   | 最小高度       
| handles        |  ['br'] | 可拉伸的位置       
| draggable      |  true   | 是否可拖拽       
| resizable      |  true   | 是否可拉伸       
| showMask       |  true   | 是否下那是mask       
| appendToBody   |  true   | 是否添加到body下       

### Methods

| name           | params | desc                      
|----------------|---------|-------------
| onShow         | {title} | 打开弹框       
| onClose        |         | 关闭弹框        
