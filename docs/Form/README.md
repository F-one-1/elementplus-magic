---
pageClass: large-page
---

# Form

> 本项目的核心思想是想用一种配置化的方式完成复杂组件的构造。目前主要支持的是Form表单组件

使用form组件快速布局

[[toc]]

::: warning 声明
如果您想直接看到form表单的效果,请使用如下代码。因为mg-form组件的正确显示需要有一个边框的限制，否则就会撑满整个屏幕
:::

<democode tag="index" style="max-width: 850px;"/>

### 基础用法 (组件样例)


<democode tag="Form/Simple" style="max-width: 850px;"/>


### Cols (组件样例)

<democode tag="Form/Cols" style="max-width: 850px;"/>

### LabelPosition (组件样例)

::: warning 说明
默认情况下，label的位置位于表单的上方，主要是为了解决label长度不齐整的情况<br/>
在label的名称相对规整情况下，可以设置`labelPosition`为`right`
:::


<democode tag="Form/LabelPosition" style="max-width: 850px;"/>

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

> 这是我的问题，我正在做....

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
