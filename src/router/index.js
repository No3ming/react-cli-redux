import React, { Component } from 'react'
import { Router, Route, IndexRedirect, IndexRoute, browserHistory } from 'react-router'
import Loadable from 'loadable-components'
import Main from '../Main'

// 登录
// const Login = Loadable(() => import(/* webpackChunkName: "login" */ '../views/Login'))

// 设备管理
const Home = Loadable(() => import(/* webpackChunkName: "equipment" */ '../views/home/Home'))

// 错误页面
const ForbiddenError      = Loadable(() => import(/* webpackChunkName: "error" */ '../views/error/403'))
const NotFound            = Loadable(() => import(/* webpackChunkName: "error" */ '../views/error/404'))
const InternalServerError = Loadable(() => import(/* webpackChunkName: "error" */ '../views/error/500'))

// 登录状态校验
const requireLogin = (nextState, replace, callback) => {
  if (localStorage.getItem('token')) {
    callback()
  } else {
    // replace('/login')
    callback()
  }
}

class AppRouter extends Component {
  render () {
    return (
      <Router history={browserHistory}>
        {/* App组件内页面 */}
        <Route path='/' component={Main}>
          <IndexRedirect to='/home'/>
          <Route path='home' component={Home}/>
          <Route path='403' component={ForbiddenError}/>
          <Route path='500' component={InternalServerError}/>
          <Route path='*' component={NotFound}/>
        </Route>
      </Router>
    )
  }
}

export default AppRouter
