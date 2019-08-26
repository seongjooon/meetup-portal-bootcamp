import React, { Component } from 'react';
import { countBreeds } from '../api/api';
import './App.css';

class App extends Component {
  componentDidMount() {
    countBreeds();
    this.renderMap();
  }

  renderMap = () => {
    const container = document.getElementById('map');
    const options = {
      center: new window.kakao.maps.LatLng(33.450701, 126.570667),
      level: 3
    };

    new window.kakao.maps.Map(container, options);
  };

  render() {
    return (
      <div className='App'>
        <div id='map'></div>
      </div>
    );
  }
}

export default App;
