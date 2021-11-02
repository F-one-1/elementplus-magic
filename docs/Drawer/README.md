---
pageClass: markdown-page
---

# Drawer

抽屉组件

### 基础用法

<mycode tag="Drawer/Simple"/>

### 左侧弹出

<mycode tag="Drawer/Left"/>

### 显示Icon

<mycode tag="Drawer/Icon"/>

### 自定义底部

<mycode tag="Drawer/Footer"/>

### 弹出表单

<mycode tag="Drawer/Form"/>

### Attributes

| name            | default         | desc             
| --------------- | --------------- | ----------------  
| value           |                 | v-model     
| title           |                 | 标题     
| width           |  296px          | 宽度     
| position        |  right          | left / right    
| closeable       |  true           | 是否显示标题的关闭按钮
| showIcon        |  false          | 是否显示body的控制按钮
| bodyStyle       | padding: 0 16px | 是否显示body的控制按钮
| maskVisible     |   true          | 是否显示mask
| appendToBody    |   true          | 是否将弹出框添加到body下面


### Slots

| name            | desc             
| --------------- | ----------------  
| footer          | 底部   
| close           | 关闭按钮
| default         | 内容区
