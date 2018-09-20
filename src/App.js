import React, { Component } from 'react';
import './App.css';
import Main from './components/MainComponent';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">LOG IN AND SIGN UP</h1>
          <h5>Jkzasori</h5>
        </header>
        <Main />
      </div>
    );
  }
}

export default App;
