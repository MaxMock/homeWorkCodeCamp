import React, { Component } from "react";
import PlayerAPI from "../api";
import { Link } from "react-router-dom";

// The FullRoster iterates over all of the players and creates
// a link to their profile page.

class Player extends Component {
  constructor(props) {
    super(props);

  }

  render() {
    const player = PlayerAPI.get(parseInt(this.props.match.params.number, 10));
    if (!player) {
      return <div>Sorry, but the player was not found</div>;
    }
    return (
      <div>
        <h1>
          {player.name} (#{player.number})
        </h1>
        <h2>Position: {player.position}</h2>
        <Link to="/roster">Back</Link>
      </div>
    );
  }
}

export default Player;
