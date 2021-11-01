---
pageClass: large-page
---

# Form

使用form组件快速布局

[[toc]]

<d/>
### 基础用法

<!-- <mycode tag="Form/Simple" style="max-width: 850px;"/> -->

```vue
<template>
  <mg-form :options="options"/>
</template>

<script>
  import { model } from 'magic'
  import data from './data.js'

  export default {
    data() {
      return {
        options: new model.Form({
          columns: [
            { label: '隐患内容', field: 'desc', layout: 'Textarea' },
            { label: '隐患单号', field: 'number', layout: 'Text' },
            { label: '隐患级别', field: 'level', layout: 'Radio', source: 'level', type: 'button' },
            { label: '检查时间', field: 'date', layout: 'Date' },
            { label: '隐患类别', field: 'category', layout: 'Select', source: 'category', multiple: true },
            { label: '整改部门', field: 'department', layout: 'TreeSelect', source: 'department' },
          ],
          events: {
            init: () => {
              this.options.setSource('category', data.category)
              this.options.setSource('level', data.level)
              this.options.setSource('department', data.department)
            },
            submit: (form, done) => {
              setTimeout(done, 1000)
            }
          }
        })
      }
    }
  }
</script>

```


### Cols

<!-- <mycode tag="Form/Cols" style="max-width: 850px;"/> -->

```vue
<template>
  <mg-form :options="options"/>
</template>

<script>
  import { model } from 'magic'
  import data from './data.js'
  export default {
    data() {
      return {
        options: new model.Form({
          config: {
            cols: 12
          },
          columns: [
            { label: '隐患内容', field: 'desc', layout: 'Textarea', cols: 24 },
            { label: '隐患单号', field: 'number', layout: 'Text' },
            { label: '隐患级别', field: 'level', layout: 'Radio', source: 'level', type: 'button' },
            { label: '检查时间', field: 'date', layout: 'Date' },
            { label: '隐患类别', field: 'category', layout: 'Select', source: 'category', multiple: true },
            { label: '整改部门', field: 'department', layout: 'TreeSelect', source: 'department' }
          ],
          events: {
            init: () => {
              this.options.setSource('category', data.category)
              this.options.setSource('level', data.level)
              this.options.setSource('department', data.department)
            },
            submit: (form, done) => {
              setTimeout(done, 1000)
            },
            'input:category': (val) => {
              console.log(val)
            }
          }
        }),
      }
      // console.log(6,this.options)
    },
  }
</script>

```

### LabelPosition

::: warning 说明
默认情况下，label的位置位于表单的上方，主要是为了解决label长度不齐整的情况<br/>
在label的名称相对规整情况下，可以设置`labelPosition`为`right`
:::


<!-- <mycode tag="Form/LabelPosition" style="max-width: 850px;"/> -->

```vue
<template>
  <mg-form :options="options"/>
</template>

<script>
  import { model } from 'magic'
  import data from './data.js'

  export default {
    data() {
      return {
        options: new model.Form({
          config: {
            cols: 12,
            labelWidth: '80px',
            labelPosition: 'right'
          },
          columns: [
            { label: '隐患内容', field: 'desc', layout: 'Textarea', cols: 24 },
            { label: '隐患单号', field: 'number', layout: 'Text' },
            { label: '隐患级别', field: 'level', layout: 'Select', source: 'level' },
            { label: '检查时间', field: 'date', layout: 'Date' },
            { label: '隐患类别', field: 'category', layout: 'Select', source: 'category', multiple: true },
            { label: '整改部门', field: 'department', layout: 'TreeSelect', source: 'department' },
          ],
          events: {
            init: () => {
              this.options.setSource('category', data.category)
              this.options.setSource('level', data.level)
              this.options.setSource('department', data.department)
            },
            submit: (form, done) => {
              setTimeout(done, 1000)
            }
          }
        })
      }
    }
  }
</script>

```
### FormColumn清单文件

### FormConfig

### FormColumn

### FormEvents