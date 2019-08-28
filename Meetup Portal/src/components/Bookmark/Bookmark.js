import React, { Component, Fragment } from 'react';
import { MdCheckBox } from 'react-icons/md';
import './Bookmark.css';

class Bookmark extends Component {
  _handleBookmarkClick = event => {
    this.props.updateBookmark(event);
  };

  _bookmarkList = bookmarkList => {
    return bookmarkList.map(event => (
      <div className='bookmark-element' key={event.id}>
        <div className='bookmark-event-name'>
          <div className='bookmark-check-icon'>
            <MdCheckBox onClick={() => this._handleBookmarkClick(event)} />
          </div>
          {event.name}
        </div>
        <div className='bookmark-event-group-name'>{event.group.name}</div>
        <div className='bookmark-rsvp-num'>
          RSVP people - {event.yes_rsvp_count}
        </div>
        <div className='bookmark-event-created-at'>
          {`${event.local_date} ${event.local_time}`}
        </div>
      </div>
    ));
  };

  render() {
    const { bookmarkList } = this.props;
    return (
      <Fragment>
        {bookmarkList.length ? (
          <div className='bookmark-list-box'>
            <div className='bookmark-list-title'>Bookmark List</div>
            <div className='bookmark-box'>
              {this._bookmarkList(bookmarkList)}
            </div>
          </div>
        ) : null}
      </Fragment>
    );
  }
}

export default Bookmark;
