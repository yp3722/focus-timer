import React, { Component } from 'react';
import './App.css';
import {MainTimer} from "./Components"

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="main-container">
          <div className="left-child">
            <MainTimer />
          </div>
          <div className="right-child">
            <p>Test-right </p>
            <h4>Basic pomodoro timer :</h4>
            <ul>
            <li>Setup npm - done</li>
            <li>Setup react - done</li>
            <li>Create homepage layout - done</li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default App;