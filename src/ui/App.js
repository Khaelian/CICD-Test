import React, { Component } from 'react';
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom'

class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <Switch>
            <Route exact path="/" component={() => (
              <div>
                Home<br />
                <Link to="/stuff">Stuff</Link>
              </div>
            )} />
            <Route path="/stuff" component={() => (
              <div>
                Stuff<br />
                <Link to="/">Home</Link>
              </div>
            )} />
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
