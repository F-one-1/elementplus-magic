import Super from './Super.js'
import Listener from './Listener'

class SearchColumn {

  static batchCreate (columns, store) {
    return columns.map(column => SearchColumn.create(column, store))
  }

  static create ({ label, field, layout, source, width, ...props }, store) {
    return new SearchColumn({
      config: { label, field, layout, source, width },
      props: Object.assign({ _label: label }, props),
      events: store.getListener(Listener.Constant.search, field)
    })
  }

  constructor ({ config = {}, props = {}, events = {} }) {
    this.config = config
    this.events = events
    this.props = props
  }
}

class SearchConfig {

  static create (config = {}) {
    return new SearchConfig(config)
  }

  constructor (config) {
    const {
      moreText = '全部',
      size = 'medium',
      hideBtn = false,
      maxCount = 1,
      btnFixed = false,
      showLabel = false,
      realTime = false,
      showReset = false,
      drawer
    } = config
    this.hideBtn = hideBtn
    this.btnFixed = btnFixed
    this.moreText = moreText
    this.maxCount = maxCount
    this.realTime = realTime
    this.showLabel = showLabel
    this.size = size
    this.showReset = showReset
    this.drawer = Object.assign({
      title: '全部搜索',
      width: '320px',
      bodyStyle: '',
      closeable: true,
      maskVisible: true
    }, drawer)
  }
}

class Search extends Super {

  static Events = {
    init: 'init',
    reset: 'reset',
    search: 'search'
  }

  constructor ({ config, columns, events, sources, value, listeners }) {
    super({ events, sources, value, listeners })
    this.columns = SearchColumn.batchCreate(columns, this)
    this.config = SearchConfig.create(config, this)
    setTimeout(this.emitEvent.bind(this, Search.Events.init), 0)
  }

  onSearch () {
    const searchParams = this.getValue() || {}
    this.emitEvent(Search.Events.search, searchParams)
  }
}

export default Search
