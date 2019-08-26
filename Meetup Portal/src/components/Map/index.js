import React, { Component } from 'react';

class Map extends Component {
  constructor(props) {
    super(props)
    this.mapBox = React.createRef();
  }

  componentDidMount() {
    this._initMap();
  }

  _initMap = () => {
    const container = this.mapBox.current;
    const options = {
      center: new window.kakao.maps.LatLng(33.450701, 126.570667),
      level: 3
    };

    new window.kakao.maps.Map(container, options);
  };

  // _zoomIn() {
  //   var level = map.getLevel();
  //   map.setLevel(level - 1);
  // }

  // _zoomOut() {
  //   var level = map.getLevel();
  //   map.setLevel(level + 1);
  // }

  render() {
    return (
      <section>
        <div className='map-box' ref={this.mapBox}></div>
      </section>
    );
  }
}

export default Map;
