import React, { createContext, useState } from 'react'
import PropTypes from 'prop-types'

import history from '~/services/history'
import api from '~/services/api'

const AuthContext = createContext()

function AuthProvider({ children }) {
  const [userInfo, setUserInfo] = useState({
    token: null,
    signed: false,
    loading: false,
    user: null,
  })

  async function signIn({ username, password }) {
    const response = await api.post('/login', {
      username,
      password,
    })

    if (response.status) {
      const { token, user } = response.data

      setUserInfo({
        token,
        signed: true,
        loading: false,
        user,
      })

      api.defaults.headers.Authorization = `Bearer ${token}`
    }
  }

  async function signUp({ name, email, password }) {
    try {
      await api.post('/users', {
        name,
        email,
        password,
      })

      history.push('/')
    } catch (error) {
      console.log('erro')
    }
  }

  return (
    <AuthContext.Provider
      value={{
        signIn,
        signUp,
        userInfo,
        setUserInfo,
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}

AuthProvider.propTypes = {
  children: PropTypes.node.isRequired,
}

export { AuthProvider, AuthContext }
