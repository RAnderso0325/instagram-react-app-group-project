import React, { Component } from 'react';
import Nav from './Layout/Nav.js';
import Home from './Home.js';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Nav />
        <Home />
      </div>
    );
  }
}

export default App;
