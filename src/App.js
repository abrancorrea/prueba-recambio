import React from "react"
import { Route, Switch } from "react-router-dom"

import Welcome from "./pages/Welcome"

import "./App.css"

const App = () => (
  <>
    <Switch>
      <Route exact path="/" component={Welcome} />
    </Switch>
  </>
)

export default App
