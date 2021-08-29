import './App.css';

import React, { Component } from 'react'
import NevBar from './Components/NevBar';
import News from './Components/News';

export default class App extends Component {

  render() {
    return (
      <div>
        <NevBar/>
        <News pageSize={6} apiKey="82dff8e01a954fc388f6a74ead7f25a5" country="in" category="sports"/>
      </div>
    )
  }
}