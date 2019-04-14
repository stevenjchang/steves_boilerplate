import React, { Component } from 'react';
import { Link } from 'react-router-dom';

 class App extends Component {
  render() {
    return (
      <div>
        <Link to={'posts'}>
          <button variant="raised">Show Posts</button>
        </Link>
      </div>
    );
  }
}

 export default App;
 