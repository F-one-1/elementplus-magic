---
home: true
heroImage: /goodlogo.jpg
actions:
  - text: 快速开始
    link: /Form/
    type: primary
  - text: 关于我
    link: /demo/
    type: secondary
features:
- title: 示例驱动
  details: 文档中内嵌了一些相关代码样本，ctrl cv即可使用
- title: 配置灵活
  details: 组件的逻辑与参数与element-plus几乎相同，配置包含默认值，并可自主配置
- title: 🦏🐂🐏🐅
  details: 🐕🐱🦒🐖🐺🦊🤡
---

### 快速集成
::: warning 说明
需要同时引入element-plus
:::
```js
import elementplusMagic from 'elementplus-magic'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
app.use(ElementPlus)
app.use(elementplusMagic)
```
::: warning 注意
请确保你的 Node.js 版本 >= 12.6。 
:::