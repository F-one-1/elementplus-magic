export default {
  mode: [
    {
      label: '修bug',
      value: 1
    },
    {
      label: '找bug',
      value: 2
    }
  ],
  category: [
    {
      label: '寻找',
      value: 1
    },
    {
      label: '发现',
      value: 2
    },
    {
      label: '错误',
      value: 3
    }
  ],
  level: [
    {
      label: 'warning',
      value: 1
    },
    {
      label: 'error',
      value: 2
    },
    {
      label: 'false',
      value: 3
    }
  ],
  department: [
    {
      label: '动物',
      value: '1-1',
      children: [
        {
          label: '犀牛',
          value: '2-1',
          children: [
            {
              label: '灰犀牛',
              value: '2-1-1'
            },
            {
              label: '白犀牛',
              value: '2-1-2'
            },
            {
              label: '黑犀牛',
              value: '2-1-3'
            }
          ]
        },
        {
          label: '鳄鱼',
          value: '2-2',
          children: [
            {
              label: '小鳄鱼',
              value: '2-2-1'
            },
            {
              label: '老鳄鱼',
              value: '2-2-2'
            }
          ]
        }
      ]
    }
  ],
}