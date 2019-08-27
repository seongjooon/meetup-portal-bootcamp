import React, { Component } from 'react';

import './index.css';

class Detail extends Component {
  render() {
    // const { eventList } = this.props;
    return (
      <>
        {/* {eventData.length ? (
          <div className='events-box'>
            <div>
              {eventData.map(eventEL => (
                <div className='event-element' key={eventEL.id}>
                  <div className='event-created-at'>
                    {`${eventEL.local_date}/${eventEL.local_time}`}
                  </div>
                  <div className='event-name'>{eventEL.name}</div>
                  <div className='event-group-name'>
                    Group name - {eventEL.group.name}
                  </div>
                  <div className='rsvp-num'>
                    RSVP 인원 - {eventEL.yes_rsvp_count}
                  </div>
                  <div className='host-name'>
                    Host - {eventEL.group.urlname}
                  </div>
                  <div className='host-img'>{null}</div>
                </div>
              ))}
            </div>
          </div>
        ) : null} */}
      </>
    );
  }
}

export default Detail;