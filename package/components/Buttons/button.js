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
      margin: '0 20px'
    },
    class: 'magic-buttons-split'
  },
  space: {
    layout: 'div',
    style: {
      margin: '0 20px'
    },
    class: ''
  }
}
