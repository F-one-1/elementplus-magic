import { ElNotification,ElMessageBox } from 'element-plus'
import { createApp } from 'vue'
const app = createApp({})
export const config = {}

export let xlsx = null

export let qrcodejs2 = null

export let sortablejs = null

export let clipboard = null

export let printjs = null

export let vue = app

export let tools = {
  MessageBox: ElMessageBox,
  Notification: ElNotification
}

export default {
  use (_vue, props = {}) {
    const {
      xlsx: _xlsx,
      sortablejs: _sortablejs,
      config: _config,
      tools: _tools
    } = props
    Object.assign(config, _config)
    Object.assign(tools, _tools)
    xlsx = _xlsx
    sortablejs = _sortablejs
    vue = _vue
  }
}
