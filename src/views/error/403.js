import React, { Component } from 'react'
import '../../styles/Error.less'
import svg403 from '../../assets/403.svg'

class ForbiddenError extends Component {
  render () {
    return (
      <div className='error'>
        <div className="error-image">
          <img src={svg403} alt="403"/>
        </div>
        <div className="error-message">
          <p className='title'>403</p>
          <p>抱歉，你无权访问该页面</p>
        </div>
      </div>
    )
  }
}

export default ForbiddenError
