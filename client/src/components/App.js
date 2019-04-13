import React, { Component } from 'react';
import { Link } from 'react-router-dom';

 class App extends Component {
  render() {
    return (
      <div>
        <h1>App 23425</h1>
        <Link to={'list'}>
        <button variant="raised">
            My List
        </button>
      </Link>
      </div>
    );
  }
}

 export default App;
 