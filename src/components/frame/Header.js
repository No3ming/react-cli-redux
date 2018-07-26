import React, { Component } from 'react'
import { inject, observer } from 'mobx-react'
import { observable, action } from 'mobx'
import propTypes from 'prop-types'

@inject('appStore')
@observer
class Header extends Component {
  static propTypes = {
    onLogout: propTypes.func,
    showUser: propTypes.bool
  }

  static defaultProps = {
    showUser: true
  }

  @observable states = {
    visible: false,
  }

  @action showUserInfoDialog () {
    this.states.visible = true
  }

  @action hideUserInfoDialog () {
    this.states.visible = false
  }

  render () {
    const {showUser, onLogout, appStore} = this.props
    const {username, type, enterpriseName, storeName} = appStore.tokenInfo

    return (
      <div className="header">
        <div className="logo">
          <h1>react-cli-mobx</h1>
        </div>
      </div>
    )
  }
}

export default Header
