<script type="text/jsx">
  import FormColumn from '../FormColumn/index.vue'
  import Column from '../../model/Column.js'
  export default {
    components: {
      FormColumn
    },
    props: {
      cols: {},
      store: {},
      gutter: {},
      panels: {},
      columns: {}
    },
    methods: {
      setValue ({ field }, val) {
        return this.store.setValue(field, val)
      },
      getCols ({ cols }) {
        return cols || this.cols
      },
      getSource ({ source }) {
        const data = source ? this.store.getSource(source) : []
        return data || []
      },
      getValue ({ field }) {
        return this.store.getValue(field)
      },
      getColumns () {
        const slots = Column.GetColumnsFormSlots(this.$slots.default, Column.POSITION.form)
        console.log('this.$slots.default',this.$slots.default,Column.POSITION.form)
        const columns = this.columns.map(column => {
          return {
            field: column.config.field,
            vNode: (
              <el-col
                span={ this.getCols(column.config) }
                style={ column.config.colStyle }
                class="magic-form-col">
                <el-form-item
                  style={ column.config.formItemStyle }
                  labelWidth={ column.config.labelWidth }
                  label={ column.config.label }
                  prop={ column.config.field }>
                  <form-column
                    style={ column.config.style || { width: column.config.width || '100%' } }
                    onInput={ val => this.setValue(column.config, val) }
                    source={ this.getSource(column.config) }
                    value={ this.getValue(column.config) }
                    layout={ column.config.layout }
                    events={ column.events }
                    prop={ column.props }
                  />
                </el-form-item>
              </el-col>
            )
          }
        })
        slots.forEach((column) => {
          const index = columns.findIndex(item => item.field === column.field)
          index === -1 ? columns.unshift(column) : columns.splice(index + 1, 0, column)
        })
        return columns
      },
      renderColumns () {
        const columns = this.getColumns()
        return columns.map(item => item.vNode)
      },
      renderPanels () {
        const AllColumns = this.getColumns()
        return this.panels.map(({ columns, label, gutter, titleStyle, cols = 24, borderRight = false, showLabel = true }) => {
          const childrens = AllColumns.reduce((results, column) => {
            if (columns.indexOf(column.field) > -1) results.push(column.vNode)
            return results
          }, [])
          return (
            <el-col
              span={ cols }
              class={ 'magic-form-card' + (borderRight ? ' has-borderRight' : '') }>
              {
                showLabel && (
                  <div
                    class="magic-form-card-title"
                    style={ titleStyle }>
                    { label }
                  </div>
                )
              }
              <el-row gutter={ gutter || this.gutter }>
                { childrens }
              </el-row>
            </el-col>
          )
        })
      }
    },
    render () {
      return (
        <el-row gutter={ this.gutter }>
          { this.panels ? this.renderPanels() : this.renderColumns() }
        </el-row>
      )
    }
  }
</script>
