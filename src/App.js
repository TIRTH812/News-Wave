import './App.css';

import React, { Component } from 'react'
import NevBar from './Components/NevBar';
import News from './Components/News';

export default class App extends Component {

  render() {
    return (
      <div>
        <NevBar/>
        <News/>
      </div>
    )
  }
}