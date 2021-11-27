---
pageClass: markdown-page
---

# Layer

可拖拽，可拉伸的弹出框

### 基础用法

<democode tag="Layer/Simple"/>


### 禁止拖拽

<democode tag="Layer/Draggable"/>


### 禁止拉伸

<democode tag="Layer/Resizable"/>



### 关闭遮罩

<democode tag="Layer/HideMask"/>


### 定制宽高

<democode tag="Layer/Custom"/>


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
