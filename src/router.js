import React from 'react'
import { Switch, Route } from 'react-router-dom'

import Home from './pages/Home'
import Folder from './pages/Folder'
export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/:id" component={Folder} />
    </Switch>
  )
}