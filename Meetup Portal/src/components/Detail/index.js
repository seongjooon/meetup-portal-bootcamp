import React, { Component, Fragment } from 'react';
import './index.css';
import { IoIosFlash, IoIosFlashOff } from 'react-icons/io';

class Detail extends Component {
  state = { isBookmarkClicked: false };

  _handleBookmarkClick = (event) => {
    this.props.updateBookmark(event);
    // this.setState({ isBookmarkClicked: true });
  };

  render() {
    const { eventList } = this.props;
    const { isBookmarkClicked } = this.state;
    return (
      <Fragment>
        {eventList.length ? (
          <div className='event-list-box'>
            <div className='event-list-title'>Event List</div>
            <div className='events-box'>
              {eventList.map(event => (
                <div className='event-element' key={event.id}>
                  <div className='event-name'>
                    <div
                      className='bookmark-check-icon'
                      onClick={() => this._handleBookmarkClick(event)}
                    >
                      {isBookmarkClicked ? <IoIosFlash /> : <IoIosFlashOff />}
                    </div>
                    {event.name}
                  </div>
                  <div className='event-group-name'>
                    {event.group.name}
                  </div>
                  <div className='rsvp-num'>
                    RSVP people - {event.yes_rsvp_count}
                  </div>
                  <div className='event-created-at'>
                    {`${event.local_date} ${event.local_time}`}
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
