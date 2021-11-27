
**If you are using element-plus to build a form.I think you could read a minute**

## why is elementplus-magic

This is the Form code using the element-plus

<democode tag="Form/elForm" style="max-width: 850px;"/>

**If you use the elementplus-magic**

<democode tag="Form/demo" style="max-width: 850px;"/>

of course,Components have lower degrees of freedom, which is a problem I'm solving. To support more powerful custom components

## How use elementplus-magic

`yarn add elementplus-magic`

`yarn add element-plus` OR `yarn add element-plus@^1.1.0-beta.4`

```js
import elementplusMagic from 'elementplus-magic'
import ElementPlus from 'element-plus'
import 'elementplus-magic/dist/elementplus-magic.css'
import 'element-plus/dist/index.css'

app.use(elementplusMagic)
app.use(ElementPlus)
```