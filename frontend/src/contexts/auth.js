import React, { createContext, useState, useEffect } from 'react'
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

  useEffect(() => {
    const user = localStorage.getItem('userInfo')

    user && setUserInfo(JSON.parse(user))
  }, [])

  async function signIn({ email, password }) {
    try {
      const response = await api.post('/sessions', {
        email,
        password,
      })

      const { token, user } = response.data

      setUserInfo({
        token,
        signed: true,
        loading: false,
        user,
      })

      localStorage.setItem(
        'userInfo',
        JSON.stringify({
          token,
          signed: true,
          loading: false,
          user,
        })
      )

      api.defaults.headers.Authorization = `Bearer ${token}`
    } catch (error) {
      console.log(error)
    }
  }

  async function signUp({ name, email, password, developer }) {
    try {
      await api.post('/users', {
        name,
        email,
        password,
        developer,
      })

      history.push('/login')
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
