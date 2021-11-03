---
home: true
heroImage: /logo.jpg
actions:
  - text: 快速开始
    link: /Form/
    type: primary
  - text: 关于我
    link: /demo/
    type: secondary
features:
- title: 示例丰富
  details: 各种场景的代码示例，简单易学，粘贴复制即可使用。
- title: 配置灵活
  details: 默认的配置参数，丰富的配置接口，各种需求轻松满足。
- title: 内置适配器
  details: 内置多种适配器，轻松对接后台。
---

### 快速集成

同时还需要引入element-plus
```js
import magic from 'elementplus-magic'

app.use(magic)
```

::: warning 注意
请确保你的 Node.js 版本 >= 12.6。 
:::