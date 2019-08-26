import React, { Component } from 'react';
import './App.css';
import Map from './Map';
import Detail from './Detail';

class App extends Component {
  render() {
    return (
      <div className='App'>
        <Map />
        <Detail />
        {/* <Bookmark /> */}
      </div>
    );
  }
}

export default App;
