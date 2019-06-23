import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

import Login from './Login';

 class App extends Component {
  
  testProxy() {
    axios.get('/api')
    .then(res => { console.log('res ==>', res) })
    .catch(err => { console.log('err ==>', err) })
  }

  render() {
    return (
      <>
        <Login />
        <Link to={'posts'}>
          <button variant="raised">Show Posts</button>
        </Link>
        <button
          onClick={this.testProxy}
        >
          Test Proxy
        </button>
      </>
    );
  }
}

 export default App;
 