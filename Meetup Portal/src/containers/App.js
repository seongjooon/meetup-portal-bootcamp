import { connect } from 'react-redux';
import App from '../components/App';
import { getMeetupApi } from '../api/api';
import {
  LOAD_EVENT,
  BOOKMARK_EVENTS_LOAD,
  BOOKMARK_EVENTS_UPDATE,
  BOOKMARK_EVENTS
} from '../constant/constants';

const mapStateToProps = state => {
  return { eventList: state.eventList, bookmarkList: state.bookmarkList };
};

const mapDispatchToProps = dispatch => {
  return {
    onLoad(lat, lng) {
      getMeetupApi(lat, lng).then(data => {
        dispatch({ 
          type: LOAD_EVENT, 
          data 
        });
      });

      if (!localStorage.getItem(BOOKMARK_EVENTS)) {
        localStorage.setItem(BOOKMARK_EVENTS, JSON.stringify([]));
      } else {
        const bookmarkEvents = JSON.parse(
          localStorage.getItem(BOOKMARK_EVENTS)
        );
        dispatch({ 
          type: BOOKMARK_EVENTS_LOAD, 
          events: bookmarkEvents 
        });
      }
    },
    updateBookmark(event) {
      let bookmarkEvents = JSON.parse(localStorage.getItem(BOOKMARK_EVENTS));

      if (!bookmarkEvents.find(item => item.id === event.id)) {
        bookmarkEvents.push(event);
      } else {
        const filteredBookmarkEvents = bookmarkEvents.filter(
          item => item.id !== event.id
        );
        bookmarkEvents = filteredBookmarkEvents;
      }

      dispatch({ 
        type: BOOKMARK_EVENTS_UPDATE, 
        events: bookmarkEvents 
      });

      localStorage.setItem(BOOKMARK_EVENTS, JSON.stringify(bookmarkEvents));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
