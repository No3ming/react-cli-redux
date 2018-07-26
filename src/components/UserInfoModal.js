import React, { Component } from 'react'
import { observer } from 'mobx-react'
import { observable, action } from 'mobx'
import { Modal, Input } from 'antd'

// api
// import api from '../api'
// import md5 from 'blueimp-md5'

@observer
class UserInfoModal extends Component {
  @observable states = {
    ModalText: '',
    confirmLoading: false,
    errorTips: '',
    password: ''
  }

  @action handleOk = () => {
      this.props.hideUserInfoDialog()
      this.states.confirmLoading = false
    // this.states.confirmLoading = true
    // let params = {password: md5(this.states.password), username: this.props.username}
    // if (this.states.errorTips) {
    //   return false
    // }

    // console.log(params)
    // setTimeout(() => {
    //   this.props.hideUserInfoDialog()
    //   this.states.confirmLoading = false
    // }, 2000)
  }

  // @action handleCheckPwdFormat (e) {
  //   const value = e.target.value
  //   const pwdTest = /^[0-9a-zA-Z_-]{6,18}$/
  //   if (value && (value.length > 18 || value.length < 6)) {
  //     this.states.errorTips = '密码长度应在6-18位之间'
  //   } else if (value && !pwdTest.test(value)) {
  //     this.states.errorTips = '密码应由6-18位字母、数字、特殊符号“-”“_”组成'
  //   } else {
  //     this.states.errorTips = ''
  //   }
  // }

  // @action handlePwdChange (e) {
  //   console.log(e.target.value)
  //   this.states.password = e.target.value
  // }

  render () {
    const {type, username, enterpriseName, storeName} = this.props
    const title = type === 1 ? '商户平台(总店)' : '商户平台(分店)'
    // const defaultPwd = '********'
    const style = {width: 350, marginLeft: 5, display: 'inlineBlock'}
    return (
      <div>
        <Modal title={title}
               visible={this.props.visible}
               onOk={this.handleOk}
               okText={'确定'}
               cancelText={'取消'}
               confirmLoading={this.states.confirmLoading}
               onCancel={this.props.hideUserInfoDialog}
        >
          <div className="input-wrapper" style={{marginBottom: 10}}>
            <label>账号名称：</label>
            <Input
              style={style}
              disabled={true}
              defaultValue={username}
            />
          </div>
          {/*<div className="input-wrapper">*/}
          {/*<label>密码：</label>*/}
          {/*<Input*/}
          {/*style={style}*/}
          {/*type='password'*/}
          {/*defaultValue={defaultPwd}*/}
          {/*onChange={(e) => this.handlePwdChange(e)}*/}
          {/*onFocus={e => {e.target.value = ''}}*/}
          {/*onBlur={(e) => this.handleCheckPwdFormat(e)}*/}
          {/*/>*/}
          {/*<p style={{marginTop: 10, marginBottom: 0, color: '#f5222d'}}>{this.states.errorTips}</p>*/}
          {/*</div>*/}
          <p style={{marginTop: 10}}>企业名称：&nbsp;&nbsp;{enterpriseName}</p>
          {type === 1 ? null : <p style={{marginBottom: 10}}>分店名称：&nbsp;&nbsp;{storeName}</p>}
        </Modal>
      </div>
    )
  }
}

export default UserInfoModal