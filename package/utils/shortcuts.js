import moment from 'moment'

export const ShortCuts = {
  date: [
    {
      text: '今天',
      onClick: picker => picker.$emit('pick', moment().toDate())
    },
    {
      text: '昨天',
      onClick: picker => picker.$emit('pick', moment().subtract(1, 'days').toDate())
    },
    {
      text: '三天前',
      onClick: picker => picker.$emit('pick', moment().subtract(3, 'days').toDate())
    },
    {
      text: '一周前',
      onClick: picker => picker.$emit('pick', moment().subtract(7, 'days').toDate())
    }
  ],
  dateRange: [
    {
      text: '最近一周',
      onClick: picker => picker.$emit('pick', [moment().subtract(7, 'days').toDate(), moment().toDate()])
    },
    {
      text: '最近一个月',
      onClick: picker => picker.$emit('pick', [moment().subtract(1, 'month').toDate(), moment().toDate()])
    },
    {
      text: '最近三个月',
      onClick: picker => picker.$emit('pick', [moment().subtract(3, 'month').toDate(), moment().toDate()])
    }
  ]
}
