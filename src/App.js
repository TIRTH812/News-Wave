import './App.css';

import React, { useState } from 'react'
import NevBar from './Components/NevBar';
import News from './Components/News';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import LoadingBar from 'react-top-loading-bar'

const App = () => {

  //Restart the app after loading the key through .env.local file
  const apiKey = process.env.REACT_APP_NEWS_API_2;
  const pageSize = 6;
  const country = "in";

  const [progress, setProgress] = useState(0);

  return (
    <div>
      <Router>
        <NevBar />
        <LoadingBar
          height={2}
          color='#f11946'
          progress={progress}
        />
        <Switch>
          <Route exact path="/"><News setProgress={setProgress} key="general" pageSize={pageSize} apiKey={apiKey} country={country} category="general" /></Route>
          <Route exact path="/business"><News setProgress={setProgress} key="business" pageSize={pageSize} apiKey={apiKey} country={country} category="business" /></Route>
          <Route exact path="/entertainment"><News setProgress={setProgress} key="entertainment" pageSize={pageSize} apiKey={apiKey} country={country} category="entertainment" /></Route>
          <Route exact path="/general"><News setProgress={setProgress} key="general" pageSize={pageSize} apiKey={apiKey} country={country} category="general" /></Route>
          <Route exact path="/health"><News setProgress={setProgress} key="health" pageSize={pageSize} apiKey={apiKey} country={country} category="health" /></Route>
          <Route exact path="/science"><News setProgress={setProgress} key="science" pageSize={pageSize} apiKey={apiKey} country={country} category="science" /></Route>
          <Route exact path="/sports"><News setProgress={setProgress} key="sports" pageSize={pageSize} apiKey={apiKey} country={country} category="sports" /></Route>
          <Route exact path="/technology"><News setProgress={setProgress} key="technology" pageSize={pageSize} apiKey={apiKey} country={country} category="technology" /></Route>
        </Switch>
      </Router>
    </div>
  )
}

export default App;