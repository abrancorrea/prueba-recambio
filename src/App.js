import React from "react"
import { Route, Switch } from "react-router-dom"

import Welcome from "./pages/Welcome"
import MasterForm from "./pages/MasterForm.js"

import "./App.css"

const App = () => (
  <>
    <Switch>
      <Route exact path="/" component={Welcome} />
      <Route path="/form" component={MasterForm} />
    </Switch>
  </>
)

export default App
