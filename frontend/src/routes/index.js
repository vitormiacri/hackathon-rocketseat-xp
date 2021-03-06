import React from 'react'
import { Switch } from 'react-router-dom'

import Route from './Routes'

import Home from '~/pages/Home'

import Dashboard from '~/pages/Dashboard'
import Details from '~/pages/Details'
import SignIn from '~/pages/SignIn'
import SignUp from '~/pages/SignUp'
import Profile from '~/pages/Profile'

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/login" component={SignIn} />
      <Route path="/register" component={SignUp} />

      <Route path="/dashboard" isPrivate component={Dashboard} />
      <Route path="/details" isPrivate component={Details} />
      <Route path="/profile" isPrivate component={Profile} />
    </Switch>
  )
}
