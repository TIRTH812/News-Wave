import './App.css';

import React, { Component } from 'react'
import NevBar from './Components/NevBar';
import News from './Components/News';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import LoadingBar from 'react-top-loading-bar'

export default class App extends Component {

  state = {
    progress: 0
  }

  setProgress = (progress) => {
    this.setState({progress: progress})
  }
  
  //Restart the app after loading the key through .env.local file
  apiKey = process.env.REACT_APP_NEWS_API;
  
  render() {
    const pageSize = 6;
    const country = "in";
    return (
      <div>
        <Router>
          <NevBar />
          <LoadingBar
            height={2}
            color='#f11946'
            progress={this.state.progress}
          />
          <Switch>
            <Route exact path="/"><News setProgress={this.setProgress} key="general" pageSize={pageSize} apiKey={this.apiKey} country={country} category="general" /></Route>
            <Route exact path="/business"><News setProgress={this.setProgress} key="business" pageSize={pageSize} apiKey={this.apiKey} country={country} category="business" /></Route>
            <Route exact path="/entertainment"><News setProgress={this.setProgress} key="entertainment" pageSize={pageSize} apiKey={this.apiKey} country={country} category="entertainment" /></Route>
            <Route exact path="/general"><News setProgress={this.setProgress} key="general" pageSize={pageSize} apiKey={this.apiKey} country={country} category="general" /></Route>
            <Route exact path="/health"><News setProgress={this.setProgress} key="health" pageSize={pageSize} apiKey={this.apiKey} country={country} category="health" /></Route>
            <Route exact path="/science"><News setProgress={this.setProgress} key="science" pageSize={pageSize} apiKey={this.apiKey} country={country} category="science" /></Route>
            <Route exact path="/sports"><News setProgress={this.setProgress} key="sports" pageSize={pageSize} apiKey={this.apiKey} country={country} category="sports" /></Route>
            <Route exact path="/technology"><News setProgress={this.setProgress} key="technology" pageSize={pageSize} apiKey={this.apiKey} country={country} category="technology" /></Route>
          </Switch>
        </Router>
      </div>
    )
  }
}