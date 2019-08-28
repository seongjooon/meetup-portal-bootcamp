import React, { Component, Fragment } from 'react';
import { MdCheckBox, MdCheckBoxOutlineBlank } from 'react-icons/md';
import './EventList.css';

class EventList extends Component {
  _handleBookmarkClick = event => {
    this.props.updateBookmark(event);
  };

  _eventList = eventList => {
    const { bookmarkList } = this.props;
    return eventList.map(event => (
      <div className='event-element' key={event.id}>
        <div className='event-name'>
          {bookmarkList.find(seletedEvent => seletedEvent.id === event.id) ? (
            <div className='bookmark-check-icon'>
              <MdCheckBox onClick={() => this._handleBookmarkClick(event)} />
            </div>
          ) : (
            <div className='bookmark-check-icon'>
              <MdCheckBoxOutlineBlank
                onClick={() => this._handleBookmarkClick(event)}
              />
            </div>
          )}
          {event.name}
        </div>
        <div className='event-group-name'>{event.group.name}</div>
        <div className='rsvp-num'>RSVP people - {event.yes_rsvp_count}</div>
        <div className='event-created-at'>
          {`${event.local_date} ${event.local_time}`}
        </div>
      </div>
    ));
  };

  render() {
    const { eventList } = this.props;
    return (
      <Fragment>
        {eventList.length ? (
          <div className='event-list-box'>
            <div className='event-list-title'>Event List</div>
            <div className='events-box'>{this._eventList(eventList)}</div>
          </div>
        ) : null}
      </Fragment>
    );
  }
}

export default EventList;
