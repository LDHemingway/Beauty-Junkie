import React, { Component } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Home from './components/Home'
import Region from './components/Region'


class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/:regionId' component={Region} />
        </Switch>
      </Router>
    )
  }
}
export default App
