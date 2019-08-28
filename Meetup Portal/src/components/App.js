import React, { Component } from 'react';
import './App.css';
import MapContainer from './Map';
import Detail from './Detail';
import Bookmark from './Bookmark';
import { MEET_UP_LOGO } from '../constant/constants';

class App extends Component {
  componentDidMount() {
    this.props.onLoad();
  }

  render() {
    const { eventList, bookmarkList, onLoad, updateBookmark } = this.props;
    return (
      <div className='App'>
        <div className='logo'>
          <img alt={0} src={MEET_UP_LOGO} />
        </div>
        <MapContainer eventList={eventList} onLoad={onLoad} />
        <Detail
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
