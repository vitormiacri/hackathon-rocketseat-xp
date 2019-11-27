import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import DefaultLayout from '~/pages/_layouts/default'

import Home from '~/pages/Home'
import SignIn from '~/pages/SignIn'
import AuthLayout from './pages/_layouts/auth'
import SignUp from './pages/SignUp'

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route
          exact
          path="/"
          component={props => (
            <DefaultLayout>
              <Home {...props} />
            </DefaultLayout>
          )}
        />
        <Route
          path="/login"
          component={props => (
            <AuthLayout>
              <SignIn {...props} />
            </AuthLayout>
          )}
        />
        <Route
          path="/register"
          component={props => (
            <AuthLayout>
              <SignUp {...props} />
            </AuthLayout>
          )}
        />
      </Switch>
    </BrowserRouter>
  )
}
