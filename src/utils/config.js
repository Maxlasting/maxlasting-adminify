const routerMap = [
  {
    key: '/index',
    icon: 'el-icon-menu',
    text: '首页'
  },
  {
    key: '/slider',
    icon: 'el-icon-picture',
    text: '焦点图设置'
  },
  {
    key: '/notes',
    icon: 'el-icon-document',
    text: '笔记'
  },
  {
    key: '/extends',
    icon: 'el-icon-share',
    text: '转载'
  },
  {
    key: '/user',
    icon: 'el-icon-news',
    text: '用户管理',
    disabled: true
  },
  {
    key: '/setting',
    icon: 'el-icon-setting',
    text: '权限管理',
    disabled: true
  }
]

const breadMap = {
  '/index': '首页',
  '/slider': '焦点图设置',
  '/notes': '笔记',
  '/extends': '转载',
  '/user': '用户管理',
  '/setting': '权限管理'
}

export {
  routerMap,
  breadMap
}
