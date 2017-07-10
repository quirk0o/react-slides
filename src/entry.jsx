import './assets/app.scss'

import React from 'react'
import ReactDOM from 'react-dom'
import {AppContainer} from 'react-hot-loader'
import {BrowserRouter} from 'react-router-dom'

import App from './app'

const render = (Component) => {
  ReactDOM.render(
    <AppContainer>
      <BrowserRouter>
        <Component />
      </BrowserRouter>
    </AppContainer>,
    document.getElementById('root')
  )
}

render(App)

// Hot Module Replacement API
if (module.hot) {
  module.hot.accept('./app.jsx', () => {
    render(require('./app').default)
  })
}