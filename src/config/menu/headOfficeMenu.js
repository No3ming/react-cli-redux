export default {
  theme: 'light',
  mode: 'inline',
  menus: [
    {
      icon: 'tablet',
      key: 'equipments',
      title: '设备管理',
      children: [
        {
          key: '/equipments',
          path: '/equipments',
          text: '设备列表'
        }
      ]
    },
    {
      icon: 'skin',
      key: 'products',
      title: '商品管理',
      children: [
        {
          key: '/products/upload',
          path: '/products/upload',
          text: '上传商品'
        },
        {
          key: '/products/pending',
          path: '/products/pending',
          text: '待审核商品'
        },
        {
          key: '/products/reject',
          path: '/products/reject',
          text: '审核拒绝商品'
        },
        {
          key: '/products/published',
          path: '/products/published',
          text: '已发布商品'
        },
        {
          key: '/products/await',
          path: '/products/await',
          text: '待发布商品'
        },
        {
          key: '/products/show',
          path: '/products/show',
          text: '商品展示配置'
        }
      ]
    },
    {
      icon: 'shop',
      key: 'branches',
      title: '分店管理',
      children: [
        {
          key: '/branches',
          path: '/branches',
          text: '分店列表'
        }
      ]
    },
    {
      icon: 'notification',
      key: 'operations',
      title: '运营管理',
      children: [
        /* {
          key: '/operations',
          path: '/operations',
          text: '为你推荐'
        }, */
        {
          key: '/operations',
          path: '/operations/background-config',
          text: '广告页配置'
        },
        {
          key: '/operations',
          path: '/operations/sticker-activity',
          text: '贴纸活动'
        }
      ]
    }
  ]
}
