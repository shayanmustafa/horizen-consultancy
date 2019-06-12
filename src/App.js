import React, { Component } from 'react';

import NavBar from '../src/components/navbar'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <NavBar />
        </header>
      </div>
    );
  }
}

export default App;
