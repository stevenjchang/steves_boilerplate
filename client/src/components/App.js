import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

 class App extends Component {
  
  testProxy() {
    axios.get('/api')
    .then(res => { console.log('res ==>', res) })
    .catch(err => { console.log('err ==>', err) })
  }

  render() {
    return (
      <div>
        <Link to={'posts'}>
          <button variant="raised">Show Posts</button>
        </Link>
        <button
          onClick={this.testProxy}
        >
          Test Proxy
        </button>
      </div>
    );
  }
}

 export default App;
 