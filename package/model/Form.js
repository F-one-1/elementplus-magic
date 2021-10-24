import Super from './Super.js'
import Listener from './Listener'
import { getRule, withSandbox } from '../utils'

class FormColumn {

  static batchCreate (columns, store) {
    return columns.map(column => FormColumn.create(column, store))
  }

  static create ({ label, labelWidth, width, field, layout, source, cols, colStyle, formItemStyle, style, rules, ...props }, store) {
    if (label === false) {
      label = ''
      labelWidth = '0px'
    }
    return new FormColumn({
      config: { label, labelWidth, width, field, layout, source, cols, colStyle, formItemStyle, style, rules },
      props: Object.assign({ _label: label }, props),
      events: store.getListener(Listener.Constant.form, field)
    })
  }

  constructor ({ config = {}, props = {}, events = {} }) {
    this.config = config
    this.props = props
    this.events = events
    this.disabled = props.disabled
    this.isDisabled = props.isDisabled
    this.isRender = props.isRender
  }

  setDisabled (fields = [], form) {
    if (this.disabled) return
    if (this.isDisabled) {
      this.props = Object.assign({}, this.props, { disabled: withSandbox(this.isDisabled, form) })
    } else {
      const disabled = fields.indexOf(this.config.field) > -1
      this.props = Object.assign({}, this.props, { disabled })
    }
  }

  isShow (fields = [], form) {
    if (this.isRender) {
      return withSandbox(this.isRender, form)
    } else {
      return fields.indexOf(this.config.field) === -1
    }
  }
}

class FormConfig {

  static getColumnsByRange ([start, end], columns) {
    const startIndex = columns.findIndex(v => v.config.field === start.split(':')[0])
    const endIndex = columns.findIndex(v => v.config.field === end.split(':')[0])
    const range = columns.slice(startIndex + 1, endIndex).map(v => v.config.field)
    return [start, ...range, end]
  }

  static getPanels (panels, columns = []) {
    if (panels) {
      return panels.map(panel => {
        return {
          ...panel,
          columns: panel.columns.reduce((results, item) => {
            if (Array.isArray(item)) {
              results = [].concat(results, FormConfig.getColumnsByRange(item, columns))
            } else {
              results.push(item)
            }
            return results
          }, [])
        }
      })
    }
  }

  static getRules (rules = {}, columns = []) {
    columns.forEach(column => {
      const { field, rules: _rules } = column.config
      _rules !== undefined && _rules !== false && (rules[field] = _rules)
    })
    const fn = (message) => ({ required: true, message, trigger: 'blur' })
    return Object.keys(rules).reduce((result, k) => {
      const v = rules[k]
      let validator = v
      if (typeof v === 'boolean') {
        const column = columns.find(n => n.config.field === k)
        validator = column ? fn(`请填写${column.config.label}!`) : null
      } else if (typeof v === 'number') {
        validator = getRule(v)
      } else if (typeof v === 'string') {
        validator = fn(v)
      }
      validator && (result[k] = validator)
      return result
    }, {})
  }

  static create (config = {}, store) {
    const panels = FormConfig.getPanels(config.panels, store.columns)
    const rules = FormConfig.getRules(config.rules, store.columns)
    config.placeholder && store.columns.forEach(v => !v.props.placeholder && (v.props.placeholder = config.placeholder))
    config.formItemStyle && store.columns.forEach(v => !v.config.formItemStyle && (v.config.formItemStyle = config.formItemStyle))
    const events = store.getListener(Listener.Constant.form)
    return new FormConfig({ ...config, panels, rules, events })
  }

  constructor (config) {
    const {
      labelWidth = 'auto',
      labelPosition = 'top',
      size = 'medium',
      rules = {},
      gutter = 26,
      cols = 24,
      btnAlign = 'right',
      panels,
      btnShadow = false,
      confirm = false,
      hideBottom = false,
      useLoading = true,
      autoNotify = true,
      cancelText = '取 消',
      confirmText = '提 交',
      hideFields = [],
      disabledFields = [],
      disabledSubmit = false,
      customCloseable = false,
      contentStyle,
      formItemStyle,
      placeholder,
      props = {},
      events = {}
    } = config
    this.labelWidth = labelWidth
    this.labelPosition = labelPosition
    this.size = size
    this.rules = rules
    this.cols = cols
    this.gutter = gutter
    this.confirm = confirm
    this.btnAlign = btnAlign
    this.btnShadow = btnShadow
    this.panels = panels
    this.hideBottom = hideBottom
    this.useLoading = useLoading
    this.autoNotify = autoNotify
    this.cancelText = cancelText
    this.confirmText = confirmText
    this.hideFields = hideFields
    this.disabledFields = disabledFields
    this.disabledSubmit = disabledSubmit
    this.customCloseable = customCloseable
    this.formItemStyle = formItemStyle
    this.contentStyle = contentStyle
    this.placeholder = placeholder
    this.events = events
    this.props = props
  }
}

class Form extends Super {

  static Events = {
    init: 'init',
    close: 'close',
    create: 'create',
    cancel: 'cancel',
    submit: 'submit',
    search: 'search'
  }

  constructor ({ config = {}, columns = [], events, sources, value, listeners }) {
    super({ events, sources, value, listeners })
    this.columns = FormColumn.batchCreate(columns, this)
    this.config = FormConfig.create(config, this)
    setTimeout(this.emitEvent.bind(this, Form.Events.init), 0)
  }

  create (context, done) {
    this.context = context
    const event = this.getEvent(Form.Events.create)
    event ? this.emitEvent(Form.Events.create, done) : done()
  }
}

export default Form
