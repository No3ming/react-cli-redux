import React, { Component } from 'react'
import { Icon, Spin } from 'antd'

const spinIcon = <Icon type="loading" style={{ fontSize: 24 }} spin />

class Loading extends Component {
  render () {
    return (
      <Spin tip="正在加载..." indicator={spinIcon}>
        <div className="app-loading" style={{height: 600}}/>
      </Spin>
    )
  }
}

export default Loading
