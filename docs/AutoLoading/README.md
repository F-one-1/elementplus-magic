---
pageClass: markdown-page
---

# AutoLoading

自动实现loading过渡

### 基础用法

<Code tag="AutoLoading/Simple"/>

### Attributes

| name           | default | desc                      
|----------------|---------|-------------
| hook           | created | 触发事件的钩子函数 枚举 `created` 或 `activeated`             
| always         | false   | 是否总是从新渲染                          
| position       |  top    | Spinner所在的位置 枚举 `top` `bottom` `center`                        
| ...            |         | 其余参数，同`Spinner`组件保持一致                          

### Events

| name           | params                 | desc                      
|----------------|------------------------|-------------
| load           | done:加载完毕后，进行回调  | 派发的加载事件          
