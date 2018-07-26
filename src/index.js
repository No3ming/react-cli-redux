import 'babel-polyfill'

import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'mobx-react'
import stores from './stores'
import AppRouter from './router'

import registerServiceWorker from './registerServiceWorker'

ReactDOM.render(
  <Provider {...stores}>
    <AppRouter/>
  </Provider>,
  document.getElementById('root')
)
registerServiceWorker()
