import React, { Component } from 'react';
import TimeTest from './TimeTest.js';
import Weather from './weather.js';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
      <TimeTest />
      <Weather />
      </div>
    );
  }
}

export default App;
