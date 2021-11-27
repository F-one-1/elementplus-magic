---
home: true
heroImage: /goodlogo.jpg
actions:
  - text: Start
    link: /start/
    type: primary
  - text: 关于我
    link: /demo/
    type: secondary
features:
- title: 示例驱动
  details: 文档中内嵌了一些相关代码样本，ctrl cv即可使用
- title: 配置灵活
  details: 组件的逻辑与参数与element-plus几乎相同，配置包含默认值，并可自主配置
- title: 周边丰富
  details: 组件同时搭配了抽屉组件以及弹窗拖拽组件，同时支持分离使用
---

### 快速集成
::: warning 说明
需要同时引入element-plus
:::
```js
import elementplusMagic from 'elementplus-magic'
import ElementPlus from 'element-plus'
import 'elementplus-magic/dist/elementplus-magic.css'
import 'element-plus/dist/index.css'
app.use(ElementPlus)
app.use(elementplusMagic)
```
::: warning 注意
请确保你的 Node.js 版本 >= 12.6。 
:::

::: warning 注意
注意element-plus的版本问题，目前原组件中的是"element-plus": "^1.1.0-beta.4",

而我在测试中发现，测试代码中引入最新的
"element-plus": "1.2.0-beta.3"

会出现部分问题比如ElNotification的显示问题(目前我知道的)
:::