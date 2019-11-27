import React from 'react'
import { Switch } from 'react-router-dom'

import Route from './Routes'

import Home from '~/pages/Home'

import Dashboard from '~/pages/Dashboard'
import Details from '~/pages/Details'

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={Home} />

      <Route path="/dashboard" isPrivate component={Dashboard} />
      <Route path="/details" isPrivate component={Details} />
    </Switch>
  )
}
