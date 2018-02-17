import React, { Component } from "react";
import Todo from './todofirebase'
// The FullRoster iterates over all of the players and creates
// a link to their profile page.

class Home extends Component {
  render() {
    return (
      <div style={{ padding: 24, background:"#f49c86", minHeight: 360 }}>
       <h1>Todo Firebase</h1>
      <Todo />
      </div>
    );
  }
}

export default Home;
