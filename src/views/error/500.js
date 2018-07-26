import React, { Component } from 'react'
import '../../styles/Error.less'
import svg500 from '../../assets/500.svg'

class InternalServerError extends Component {
  render () {
    return (
      <div className='error'>
        <div className="error-image">
          <img src={svg500} alt="404"/>
        </div>
        <div className="error-message">
          <p className='title'>500</p>
          <p>哎哟，服务器出错了</p>
        </div>
      </div>
    )
  }
}

export default InternalServerError
