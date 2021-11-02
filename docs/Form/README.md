---
pageClass: large-page
---

# Form

使用form组件快速布局

[[toc]]

<!-- <d/> -->
### 基础用法 (组件样例)

<mycode tag="Form/Simple" style="max-width: 850px;"/>

```vue
<template>
  <mg-form :options="options"/>
</template>

<script>
  import { model } from 'magic'
  import data from './data.js'
  // data 为构造的静态数据集
  export default {
    data() {
      return {
        options: new model.Form({
          columns: [
            { label: '多项选择', field: 'category', layout: 'Select', source: 'category', multiple: true , placeholder: ' '},
            { label: '多行文本', field: 'desc', layout: 'Textarea' },
            { label: '单行文本', field: 'number', layout: 'Text' },
            { label: 'Switch', field: 'number1', layout: 'Switch' },
            { label: 'ColorPicker', field: 'colorpicker', layout: 'ColorPicker' },
            // { label: 'slider', field: 'slider', layout: 'Slider' },
            { label: '级别选择', field: 'level', layout: 'Radio', source: 'level', type: 'button' },
            { label: 'Date', field: 'mydate', layout: 'Date' },
            { label: 'Time', field: 'mydate', layout: 'Time' , cols: 12},
            { label: 'TimeRange', field: 'mydate', layout: 'TimeRange' , cols: 12},
            { label: 'DateTime', field: 'date', layout: 'DateTime' },
            { label: 'DateTimeRange', field: 'date', layout: 'DateTimeRange' },
            { label: '单项选择', field: 'category', layout: 'Select', source: 'category', multiple: false },
            { label: '树形选择', field: 'department', layout: 'Cascader', source: 'department' },
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


### Cols (组件样例)

<mycode tag="Form/Cols" style="max-width: 850px;"/>

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
            { label: 'Textarea', field: 'desc', layout: 'Textarea', cols: 24 },
            { label: 'Textarea', field: 'desc', layout: 'Textarea', cols: 24 , placeholder: ' '},
            { label: 'Text', field: 'number', layout: 'Text' },
            { label: 'Radio', field: 'level', layout: 'Radio', source: 'level', type: 'button' },
            { label: 'Date', field: 'date', layout: 'Date' },
            { label: 'Select', field: 'category', layout: 'Select', source: 'category', multiple: true },
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
          }
        }),
      }
      // console.log(6,this.options)
    },
  }
</script>

```

### LabelPosition (组件样例)

::: warning 说明
默认情况下，label的位置位于表单的上方，主要是为了解决label长度不齐整的情况<br/>
在label的名称相对规整情况下，可以设置`labelPosition`为`right`
:::


<mycode tag="Form/LabelPosition" style="max-width: 850px;"/>

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
            rules:{
              desc: true
            },
            cols: 12,
            labelWidth: '80px',
            labelPosition: 'right'
          },
          columns: [
            { label: 'Textarea', field: 'desc', layout: 'Textarea', cols: 24 , required: true},
            { label: 'Textarea', field: 'desc', layout: 'Textarea', cols: 24 , placeholder: '你可以输入任何默认值' },
            { label: 'Text', field: 'number', layout: 'Text' },
            { label: 'Select', field: 'level', layout: 'Select', source: 'level' },
            { label: 'Date', field: 'date', layout: 'Date' },
            { label: 'Select', field: 'category', layout: 'Select', source: 'category', multiple: true },
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
### 自定义column
::: warning 说明
**(有bug,暂不支持)**
:::
> 这一部分肯定是必须的，因为在实际开发的过程中，肯定会有各种各样的需求。内置的column实例肯定是远远不够的。

### 校验规则清单
::: warning 说明
**(尚未完善，暂不支持)**
:::
**目前只内置普通的表单校验，即有无**，我们在labelPosition中有使用的实例

> 这是我的问题，我正在做....🐅🐕🐱🦒

### 示例数据清单

### FormColumn清单文件

| name            |      
| --------------- |
| Text            |                       
| Textarea        |                              
| Number          |                                 
| Date            |                     
| DateRange       |                     
| DateTimeRange   |                          
| DateTime        |                     
| Time            |                     
| TimeRange       |                     
| Select          |                         
| Cascader        |                     
| Radio           |                    
| Switch          |                             
| ColorPicker     |                     

### FormConfig

| name            | default         | desc             
| --------------- | --------------- | ----------------  
| labelWidth      |   100px         | v-model     
| labelPosition   |   top           | label的位置     
| size            |   medium        | form表单的大小     
| rules           |   { }           |   
| gutter          |   26            | 
| cols            |   24            | 
| btnAlign        |   right         | btn的位置
| btnShadow       |   false         | btn是否显示阴影
| confirm         |   true          | 提交确认


### FormColumn

| name            | default         | desc             
| --------------- | --------------- | ----------------  
| label           |                 | column的label    
| field           |                 | column的字段     
| layout          |                 | column的布局     
| source          |                 | column的数据  
| cols            |                 | column所占宽度
| rules           |                 | column表单校验
| props           |                 | column所对应组件的参数
| events          |                 | column所对于组件的事件
| ...             |                 | 其他参数，一律作为props，向下穿

### FormEvents

| name            | params            | desc             
| --------------- | ----------------- | ----------------  
| init            |                   | 表单初始化事件 （一次）    
| create          | done(callback)    | 表单创建事件  （多次）
| close           |                   | 关闭     
| cancel          |                   | 取消     
| submit          |form,done(callback)| 提交事件
| search          |                   | 提交成功后，刷新事件
