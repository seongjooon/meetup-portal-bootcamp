import React, { Component } from 'react';
import MapContainer from './Map/MapContainer';
import EventList from './EventList/EventList';
import Bookmark from './Bookmark/Bookmark';
import { MEET_UP_LOGO } from '../constant/constants';
import './App.css';

class App extends Component {
  componentDidMount() {
    this.props.onLoad();
  }

  render() {
    const { eventList, bookmarkList, onLoad, updateBookmark } = this.props;
    return (
      <div className='App'>
        <div className='logo'>
          <img alt='123' src={MEET_UP_LOGO} />
        </div>
        <MapContainer eventList={eventList} onLoad={onLoad} />
        <EventList
          eventList={eventList}
          bookmarkList={bookmarkList}
          updateBookmark={updateBookmark}
        />
        <Bookmark bookmarkList={bookmarkList} updateBookmark={updateBookmark} />
      </div>
    );
  }
}

export default App;
