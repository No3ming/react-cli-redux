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
          key: '/products/display',
          path: '/products/display',
          text: '已展示商品'
        },
        {
          key: '/products/hide',
          path: '/products/hide',
          text: '可展示商品'
        }
      ]
    }
  ]
}
