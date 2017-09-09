
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

if (module.hot) {
  module.hot.accept('./containers/AppContainer', () => {
    const NextApp = require('./containers/AppContainer').default
    ReactDOM.render(
      <Provider store={store}>
        <NextApp />
      </Provider>, 
      document.getElementById('root')
    )
  })
}

registerServiceWorker()
