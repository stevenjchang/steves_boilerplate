import React, { Component } from 'react';
import { Link } from 'react-router-dom';

 class App extends Component {
  render() {
    return (
      <div>
        <Link to={'list'}>
          <button variant="raised">My List</button>
        </Link>
      </div>
    );
  }
}

 export default App;
 