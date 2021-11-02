---
pageClass: markdown-page
---

# Buttons

快速布局button

### 基础用法

<mycode tag="Buttons/Simple"/>

```vue
<template>
  <mg-buttons :buttons="buttons"/>
</template>

<script>
  export default {
    data() {
      return {
        buttons: {
          create: () => {
            console.log('点击了创建')
          },
          edit: () => {
            console.log('点击了修改')
          },
          delete: () => {
            console.log('点击了删除')
          }
        }
      }
    }
  }
</script>

```

### 分割线

<mycode tag="Buttons/Divider"/>

```vue
<template>
  <mg-buttons :buttons="buttons"/>
</template>

<script>
  export default {
    data() {
      return {
        buttons: {
          create: () => {
            console.log('点击了创建')
          },
          delete: () => {
            console.log('点击了删除')
          },
          'divider:1': null,
          import: () => {
            console.log('点击了导入')
          },
          export: () => {
            console.log('点击了导出')
          },
          'divider:2': null,
          sync: () => {
            console.log('点击了同步')
          }
        }
      }
    }
  }
</script>

```
### 空格分割

<mycode tag="Buttons/Space"/>

```vue
<template>
  <mg-buttons :buttons="buttons"/>
</template>

<script>
  export default {
    data() {
      return {
        buttons: {
          create: () => {
            console.log('点击了创建')
          },
          delete: () => {
            console.log('点击了删除')
          },
          'space:1': null,
          import: () => {
            console.log('点击了导入')
          },
          export: () => {
            console.log('点击了导出')
          },
          'space:2': null,
          sync: () => {
            console.log('点击了同步')
          }
        }
      }
    }
  }
</script>

```

### 自定义按钮

<mycode tag="Buttons/Custom"/>

```vue
<template>
  <mg-buttons :buttons="buttons"/>
</template>

<script>
  export default {
    data() {
      return {
        buttons: {
          'approve:审 批': () => {},
          divider: null,
          'create:true': () => {
            console.log('点击了创建')
          },
          delete: () => {
            console.log('点击了删除')
          }
        }
      }
    }
  }
</script>

```
### 默认Button数据

```js
export default {
  create: {
    type: 'primary',
    size: 'medium',
    icon: 'el-icon-plus',
    text: '创 建'
  },
  edit: {
    type: 'primary',
    size: 'medium',
    plain: true,
    icon: 'el-icon-edit',
    text: '编 辑'
  },
  delete: {
    type: 'danger',
    size: 'medium',
    plain: true,
    icon: 'el-icon-delete',
    text: '删 除'
  },
  sync: {
    size: 'medium',
    icon: 'el-icon-refresh',
    text: '同 步'
  },
  import: {
    size: 'medium',
    icon: 'el-icon-upload2',
    text: '导 入'
  },
  export: {
    size: 'medium',
    icon: 'el-icon-download',
    text: '导 出'
  },
  print: {
    size: 'medium',
    icon: 'el-icon-printer',
    text: '打 印'
  },
  default: {
    type: 'primary',
    size: 'medium',
    icon: 'el-icon-edit-outline',
    text: '默 认'
  },
  divider: {
    layout: 'div',
    style: {
      margin: '0 20px',
      background: '#D9D9D9'
    },
    class: 'magic-buttons-split'
  },
  space: {
    layout: 'div',
    style: {
      margin: '0 20px'
    },
    class: 'magic-buttons-split'
  }
}

```


### 使用Icon

<mycode tag="Buttons/Icon"/>

```vue

<template>
  <mg-buttons
    layout="icon"
    :buttons="buttons"
  />
</template>

<script>
  export default {
    data() {
      return {
        buttons: {
          create: () => {
            console.log('点击了创建')
          },
          edit: () => {
            console.log('点击了编辑')
          },
          delete: () => {
            console.log('点击了删除')
          }
        }
      }
    }
  }
</script>
```

### Tooltip

<mycode tag="Buttons/Tooltip"/>

```vue
<template>
  <mg-buttons
    layout="icon"
    :buttons="buttons"
  />
</template>

<script>
  export default {
    data() {
      return {
        buttons: {
          'create:true': () => {
            console.log('点击了创建')
          },
          'edit:true': () => {
            console.log('点击了编辑')
          },
          'delete:true': () => {
            console.log('点击了删除')
          }
        }
      }
    }
  }
</script>
```

### 默认Icon数据

```js
export default {
  create: {
    icon: 'el-icon-plus',
    tooltip: false,
    text: '创 建'
  },
  edit: {
    icon: 'el-icon-edit',
    tooltip: false,
    text: '编 辑'
  },
  delete: {
    icon: 'el-icon-delete',
    tooltip: false,
    text: '删 除'
  },
  sync: {
    icon: 'el-icon-refresh',
    tooltip: false,
    text: '同 步'
  },
  import: {
    icon: 'el-icon-upload2',
    tooltip: false,
    text: '导 入'
  },
  export: {
    icon: 'el-icon-download',
    tooltip: false,
    text: '导 出'
  },
  print: {
    icon: 'el-icon-printer',
    tooltip: false,
    text: '打 印'
  },
  default: {
    icon: 'el-icon-edit-outline',
    tooltip: false,
    text: '默 认'
  }
}

```



| name           | default | desc                      
|----------------|---------|-------------
| layout         |  button |            
| buttons        |         |            
