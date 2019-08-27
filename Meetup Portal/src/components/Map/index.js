import React, { Component } from 'react';
import { Map, InfoWindow, GoogleApiWrapper, Marker } from 'google-maps-react';
import './index.css';

const mapStyles = {
  width: '100%',
  height: '100%'
};

class MapContainer extends Component {
  state = {
    showingInfoWindow: false,
    activeMarker: {},
    selectedPlace: {}
  };

  onMarkerClick = (props, marker, e) =>
    this.setState({
      selectedPlace: props,
      activeMarker: marker,
      showingInfoWindow: true
    });

  onMapClicked = props => {
    if (this.state.showingInfoWindow) {
      this.setState({
        showingInfoWindow: false,
        activeMarker: null
      });
    }
  };

  displayMarkers = () => {
    const { eventList } = this.props;
    return eventList.map(event => {
      if (event.venue) {
        return (
          <Marker
            key={event.id}
            id={event.id}
            onClick={this.onMarkerClick}
            position={{
              lat: event.venue.lat,
              lng: event.venue.lon
            }}
          />
        );
      }
    });
  };

  render() {
    return (
      <Map
        google={this.props.google}
        onClick={this.onMapClicked}
        zoom={13}
        style={mapStyles}
        initialCenter={{ lat: 40.712586, lng: -74.006839 }}
      >
        {this.displayMarkers()}
        <InfoWindow
          marker={this.state.activeMarker}
          visible={this.state.showingInfoWindow}
        >
          <div>
            <h1>{this.state.selectedPlace.name}</h1>
          </div>
        </InfoWindow>
      </Map>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyDLeObyHvEoHBoEUv6PqLOoXXJdkHKR7rk'
})(MapContainer);
