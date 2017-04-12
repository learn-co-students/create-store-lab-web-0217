import React, { Component } from 'react';
import UserInput from './components/UserInput';
import { createStore } from 'redux';

export class App extends Component {
  render() {
    return (
      <div className="App">
        <UserInput store={this.props.store}/>
      </div>
    );
  }
};

export default App;
