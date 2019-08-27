import { combineReducers } from 'redux';

const initialState = {
  eventList: []
};

const eventListReducer = (state = initialState.eventList, action) => {
  switch (action.type) {
    case 'LOAD_EVENT':
      return action.data;
    default:
      return state;
  }
};

export default combineReducers({
  eventList: eventListReducer
});
