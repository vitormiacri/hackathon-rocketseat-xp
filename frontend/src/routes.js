import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import DefaultLayout from '~/pages/_layouts/default'

import Home from '~/pages/Home'

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
      </Switch>
    </BrowserRouter>
  )
}
