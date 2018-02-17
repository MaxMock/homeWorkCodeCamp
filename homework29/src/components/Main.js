import React , { Component }from 'react'
import { Switch, Route } from 'react-router-dom'
import Home from './Home'
import Home1 from './Home1'
import Home2 from './Home2'


// The FullRoster iterates over all of the players and creates
// a link to their profile page.

class Main extends Component {
  render() {
    return (
      <main>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/Home1" component={Home1} />
          <Route exact path="/Home2" component={Home2} />

        </Switch>
      </main>
    );
  }
}

export default Main;
