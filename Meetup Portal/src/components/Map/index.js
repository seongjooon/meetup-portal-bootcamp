import React, { Component } from 'react';
import { Map, InfoWindow, GoogleApiWrapper, Marker } from 'google-maps-react';
import { getHostDataApi } from '../../api/api';
import './index.css';

const mapStyles = {
  width: '100%',
  height: '100%'
};

class MapContainer extends Component {
  state = {
    showingInfoWindow: false,
    activeMarker: {},
    selectedPlace: {},
    hostName: null,
    hostImg: null
  };

  onMarkerClick = async (props, marker) => {
    const hostData = await getHostDataApi(props.eventUrlName, props.eventId);
    this.setState({
      selectedPlace: props,
      activeMarker: marker,
      showingInfoWindow: true,
      hostName: hostData['0'].name,
      hostImg: hostData['0'].photo.thumb_link
    });
  };

  _onMapClicked = () => {
    if (this.state.showingInfoWindow) {
      this.setState({
        showingInfoWindow: false,
        activeMarker: null
      });
    }
  };

  _handleDrag = (_, map) => {
    const newLat = map.center.lat();
    const newLng = map.center.lng();
    this.props.onLoad(newLat, newLng);
  };

  displayMarkers = () => {
    const { eventList } = this.props;
    return eventList.map(event => {
      if (event.venue) {
        return (
          <Marker
            key={event.id}
            eventId={event.id}
            onClick={this.onMarkerClick}
            position={{
              lat: event.venue.lat,
              lng: event.venue.lon
            }}
            eventName={event.name}
            eventDate={event.local_date}
            eventTime={event.local_time}
            eventGroupName={event.group.name}
            eventRsvp={event.yes_rsvp_count}
            eventUrlName={event.group.urlname}
          />
        );
      } else {
        return null;
      }
    });
  };

  render() {
    const {
      activeMarker,
      showingInfoWindow,
      selectedPlace,
      hostName,
      hostImg
    } = this.state;
    return (
      <Map
        google={this.props.google}
        onClick={this._onMapClicked}
        onDragend={this._handleDrag}
        zoom={13}
        style={mapStyles}
        initialCenter={{ lat: 40.712586, lng: -74.006839 }}
      >
        {this.displayMarkers()}
        <InfoWindow marker={activeMarker} visible={showingInfoWindow}>
          <div className='info-box'>
            <img className='info-event-host-img' alt={hostName} src={hostImg} />
            <div className='info-event-name'>{selectedPlace.eventName}</div>
            <div className='info-event-date'>
              {`${selectedPlace.eventDate} / ${selectedPlace.eventTime}`}
            </div>
            <div className='info-event-group-name'>
              {selectedPlace.eventGroupName}
            </div>
            <div className='info-event-rsvp'>{selectedPlace.eventRsvp}</div>
            <div className='info-event-host-name'>{hostName}</div>
          </div>
        </InfoWindow>
      </Map>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyDLeObyHvEoHBoEUv6PqLOoXXJdkHKR7rk'
})(MapContainer);
