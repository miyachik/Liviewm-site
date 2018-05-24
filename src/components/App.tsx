import * as React from 'react'
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom'
import AppContainer from '../containers/App'
import Layout from './Layout'
import About from './About'
import NotFound from './NotFound'

export default function App(
  _props: {}
) {
  return (
    <BrowserRouter>
      <Layout children={
        <Switch>
          <Route path="/about" component={About} />
          <Route path="/404" exact component={NotFound} />
          <Route path="/" exact component={AppContainer} />
          <Route path="*" component={() => <Redirect to="/404" />} />
        </Switch>
      } />
    </BrowserRouter>
  )
}
