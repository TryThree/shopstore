import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Clothes from './Clothes.js';
class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Sales Funnel title</h2>
        </div>
        <p className="App-intro">
        <Clothes></Clothes> 

        </p>
      </div>
    );
  }
}

export default App;
