import React from 'react'
import GlobalStyle from './styles/global'
import { Router } from 'react-router-dom'

import { AuthProvider } from '~/contexts/auth'
import history from './services/history'

import Routes from './routes'

function App() {
  return (
    <AuthProvider>
      <Router history={history}>
        <Routes />
        <GlobalStyle />
      </Router>
    </AuthProvider>
  )
}

export default App
