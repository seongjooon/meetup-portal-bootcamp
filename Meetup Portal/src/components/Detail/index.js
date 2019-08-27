import React, { Component, Fragment } from 'react';

import './index.css';

class Detail extends Component {
  render() {
    const { eventList } = this.props;
    return (
      <Fragment>
        {eventList.length ? (
          <div className='event-list-box'>
            <div className='event-list-title'>Event List</div>
            <div className='events-box'>
              {eventList.map(event => (
                <div className='event-element' key={event.id}>
                  <div className='event-name'>{event.name}</div>
                  <div className='event-group-name'>
                    Group name - {event.group.name}
                  </div>
                  <div className='rsvp-num'>
                    RSVP 인원 - {event.yes_rsvp_count}
                  </div>
                  <div className='event-created-at'>
                    {`${event.local_date}/${event.local_time}`}
                  </div>
                </div>
              ))}
            </div>
          </div>
        ) : null}
      </Fragment>
    );
  }
}

export default Detail;
