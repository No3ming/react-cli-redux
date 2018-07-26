import React, { Component } from 'react'
import { Link } from 'react-router'
import { Menu, Icon } from 'antd'
// 总店菜单
import headOfficeMenu from '../../config/menu/headOfficeMenu.js'
// 分店菜单
import branchesMenu from '../../config/menu/branchesMenu.js'
import { inject, observer } from 'mobx-react'

@inject('appStore')
@observer
class Nav extends Component {
  renderMenu = (config, location) => {
    return (
      <Menu
        theme={config.theme}
        mode={config.mode}
        defaultSelectedKeys={[`${location.pathname}`]}
        defaultOpenKeys={[`${location.pathname.split('/')[1]}`]}
      >
        {config.menus.map(menu => {
            return <Menu.SubMenu
              key={menu.key}
              title={<span><Icon type={menu.icon}/><span>{menu.title}</span></span>}
            >
              {menu.children.map((subMenu) => {
                  return (
                    <Menu.Item key={subMenu.path}>
                      <Link to={subMenu.path}>
                        <span className="nav-text">{subMenu.text}</span>
                      </Link>
                    </Menu.Item>
                  )
                }
              )}
            </Menu.SubMenu>
          }
        )}
      </Menu>
    )
  }

  render () {
    const {location, appStore} = this.props
    const {type} = appStore.tokenInfo

    return (
      <div className="nav">
        {type === 1
          ? this.renderMenu(headOfficeMenu, location)
          : this.renderMenu(branchesMenu, location)
        }
      </div>
    )
  }
}

export default Nav
