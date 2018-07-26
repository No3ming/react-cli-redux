import React, { Component } from 'react'
import '../../styles/Error.less'
import svg404 from '../../assets/404.svg'

class NotFound extends Component {
  render () {
    return (
      <div className='error'>
        <div className="error-image">
          <img src={svg404} alt="404"/>
        </div>
        <div className="error-message">
          <p className='title'>404</p>
          <p>抱歉，你访问的页面不存在</p>
        </div>
      </div>
    )
  }
}

export default NotFound
