import React, { Component } from 'react';

import './App.css';

import { Calculator } from './components/cl';
import { Homework2 } from './components/Homework2';
class App extends Component {


  render() {

    return (
        <div className="App">
          <Calculator myColor="#77d7f9"/>

        </div>
    );
  }
}

export default App;
