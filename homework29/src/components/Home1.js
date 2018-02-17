import React, { Component } from "react";
import Todo from './todomockapi'
// The FullRoster iterates over all of the players and creates
// a link to their profile page.

class Home extends Component {
  render() {
    return (
      <div style={{ padding: 24, background:"#86b0f4", minHeight: 360 }}>
       <h1>Todo MockApi</h1>
       <Todo />
      </div>
    );
  }
}

export default Home;
