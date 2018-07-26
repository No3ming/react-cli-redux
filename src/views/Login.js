import React, { Component } from 'react'
import { inject } from 'mobx-react'
import md5 from 'blueimp-md5'
import { Form, Icon, Input, Button, message, Modal } from 'antd'
import canvasDotsLines from '../libs/canvasDotsLines'
import api from '../api'
import '../styles/Login.less'

@Form.create()
@inject('appStore')
class Login extends Component {
  componentDidMount () {
    if (this.props.location.query.status === 'tokenExpire') {
      Modal.warning({
        title: '提示',
        content: '登录过期, 请重新登录'
      })
    }
    canvasDotsLines({
      el: this.refs.dotsLines,
      dotsNumber: 150,
      lineMaxLength: 300,
      dotsAlpha: .5,
      speed: 1.5,
      clickWithDotsNumber: 5
    })
  }

  login = async values => {
    const {router, appStore} = this.props

    const res = await api.login({
      username: values.username,
      password: md5(values.password)
    })
    if (res.success) {
      const {token, store_type} = res.data
      const redirectURL = store_type === 1 ? '/' : '/'
      appStore.setToken(token)
      router.replace(redirectURL)
    } else {
      message.destroy()
      message.error(res.msg)
    }
  }

  handleSubmit = e => {
    e.preventDefault()

    this.props.form.validateFields(async (err, values) => {
      if (!err) this.login(values)
    })
  }

  render () {
    const {getFieldDecorator} = this.props.form

    return (
      <div className='login'>
        <div className="login-panel">
          <div className="login-form">
            <h1 className="title">云之梦童装商户后台</h1>
            <Form onSubmit={this.handleSubmit}>
              <Form.Item>
                {getFieldDecorator('username', {
                  rules: [{required: true, message: '请输入用户名!'}],
                })(
                  <Input
                    prefix={<Icon type="user" style={{color: 'rgba(0,0,0,.25)'}}/>}
                    placeholder="用户名"
                  />
                )}
              </Form.Item>
              <Form.Item>
                {getFieldDecorator('password', {
                  rules: [{required: true, message: '请输入密码!'}],
                })(
                  <Input
                    prefix={<Icon type="lock" style={{color: 'rgba(0,0,0,.25)'}}/>}
                    type="password"
                    placeholder="密码"
                  />
                )}
              </Form.Item>
              <Form.Item>
                <Button type="primary" htmlType="submit" style={{width: '100%'}}>
                  登 录
                </Button>
              </Form.Item>
            </Form>
          </div>
          <div className="backdrop"/>
        </div>
        <div ref='dotsLines' className='dots-lines-bg'/>
      </div>
    )
  }
}

export default Login
