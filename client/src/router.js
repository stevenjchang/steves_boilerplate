import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import App from './components/App';

const Error = () => (
  <div>
    <h1>Route does not exist</h1>
  </div>
)

class Router extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
        <Switch>
          <Route path='/list' component={Error} />
          <Route path='/' component={App} exact />
        </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default Router;
