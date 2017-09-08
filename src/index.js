
import React from 'react'
import ReactDOM from 'react-dom'

import App from './containers/AppContainer'
import registerServiceWorker from './worker/registerServiceWorker'
import './styles/index.css'

import { Provider } from 'react-redux'
import store from './store'


ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>, 
  document.getElementById('root')
)

registerServiceWorker()
