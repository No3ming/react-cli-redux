import React, { Component } from 'react'
import { inject } from 'mobx-react'
import { Modal } from 'antd'
import Header from './components/frame/Header'
import Nav from './components/frame/Nav'
import api from './api'

import a from './styles/Main.less'

@inject('appStore')
class Main extends Component {
  componentWillMount () {
    // this.getTokenInfo()
    console.log(a)
  }

  render () {
    const {location, children} = this.props

    return (
      <div className="main app">
        <Header onLogout={this.handleLogout}/>
        <div className="content">
          <Nav location={location}/>
          <div className="container-wrapper">
            <div className="container">
              {children}
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Main
