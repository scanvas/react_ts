import React, { Suspense } from 'react'
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom'
import { Spin } from 'antd'
import Home from '../pages/Home'

const AppRouter: React.FC<unknown> = () => (
  <Router>
    <Suspense fallback={<Spin size="large" />}>
      <Switch>
        <Route path="/">
          <Home />
        </Route>
        <Route path="/home">
          <Home />
        </Route>
        <Redirect to="/" />
      </Switch>
    </Suspense>
  </Router>
)
export default AppRouter
