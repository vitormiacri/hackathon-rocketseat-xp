import React from 'react'
import GlobalStyle from './styles/global'
import { Router } from 'react-router-dom'

import history from './services/history'

import Routes from './routes'

function App() {
  return (
    <Router history={history}>
      <Routes />
      <GlobalStyle />
    </Router>
  )
}

export default App
