import React, { Component } from 'react';
import './App.css';
import MapContainer from './Map';
import Detail from './Detail';

class App extends Component {
  componentDidMount() {
    this.props.onLoad();
  }

  render() {
    console.log(this.props);
    const { eventList } = this.props;
    return (
      <div className='App'>
        <MapContainer eventList={eventList} />
        <Detail />
        {/* <Bookmark /> */}
      </div>
    );
  }
}

export default App;
