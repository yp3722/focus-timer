import React, { Component } from 'react';
import './App.css';
import {MainTimer, GoogleAuth} from "./Components"
import { logDeviceInfo } from './utils/telemetry';


class App extends Component {
  componentDidMount() {
    logDeviceInfo();
  }

  render() {
    return (
      <div className="App">
        {/* <GoogleAuth /> */}
        <div className="main-container">
            <div className='counter-application'>
            <MainTimer />
            </div>
          <div className="article">
            Article
          </div>
        </div>
      </div>
    );
  }
}

export default App;