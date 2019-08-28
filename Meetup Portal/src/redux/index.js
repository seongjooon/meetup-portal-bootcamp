import { combineReducers } from 'redux';
import {
  LOAD_EVENT,
  BOOKMARK_EVENTS_LOAD,
  BOOKMARK_EVENTS_UPDATE
} from '../constant/constants';

export const initialState = {
  eventList: [],
  bookmarkList: []
};

export const eventListReducer = (state = initialState.eventList, action) => {
  switch (action.type) {
    case LOAD_EVENT:
      return action.data;
    default:
      return state;
  }
};

export const bookmarkReducer = (state = initialState.bookmarkList, action) => {
  switch (action.type) {
    case BOOKMARK_EVENTS_LOAD:
      return [...action.events];
    case BOOKMARK_EVENTS_UPDATE:
      return [...action.events];
    default:
      return state;
  }
};

export default combineReducers({
  eventList: eventListReducer,
  bookmarkList: bookmarkReducer
});
