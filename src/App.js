import './App.css';

import React, { Component } from 'react'
import NevBar from './Components/NevBar';
import News from './Components/News';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

export default class App extends Component {
  render() {
    const pageSize = 6;
    const apiKey = "7c9f2f5fbd7448518153de0a31174cbc";
    const country = "in";
    return (
      <div>
        <Router>
          <NevBar />
          <Switch>
            <Route exact path="/"><News key="general" pageSize={pageSize} apiKey={apiKey} country={country} category="general"/></Route>
            <Route exact path="/business"><News key="business" pageSize={pageSize} apiKey={apiKey} country={country} category="business"/></Route>
            <Route exact path="/entertainment"><News key="entertainment" pageSize={pageSize} apiKey={apiKey} country={country} category="entertainment"/></Route>
            <Route exact path="/general"><News key="general" pageSize={pageSize} apiKey={apiKey} country={country} category="general"/></Route>
            <Route exact path="/health"><News key="health" pageSize={pageSize} apiKey={apiKey} country={country} category="health"/></Route>
            <Route exact path="/science"><News key="science" pageSize={pageSize} apiKey={apiKey} country={country} category="science"/></Route>
            <Route exact path="/sports"><News key="sports" pageSize={pageSize} apiKey={apiKey} country={country} category="sports"/></Route>
            <Route exact path="/technology"><News key="technology" pageSize={pageSize} apiKey={apiKey} country={country} category="technology"/></Route>
          </Switch>
        </Router>
      </div>
    )
  }
}