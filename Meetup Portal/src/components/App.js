import React, { Component } from 'react';
import './App.css';
import MapContainer from './Map';
import Detail from './Detail';
import Bookmark from './Bookmark';

class App extends Component {
  componentDidMount() {
    this.props.onLoad();
  }

  render() {
    const { eventList } = this.props;
    return (
      <div className='App'>
        <MapContainer eventList={eventList} />
        <div className='detail-box'>
          <div className='logo'>Meetup</div>
          <Detail eventList={eventList} />
          <Bookmark />
        </div>
      </div>
    );
  }
}

export default App;
