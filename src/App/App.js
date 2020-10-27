import React, { Component } from 'react';
import Members from '../Components/Members';
import './App.scss';

class App extends Component {
  render() {
    return (
      <div data-testid="app" className="App">
        <Members />
      </div>
    );
  }
}

export default App;
