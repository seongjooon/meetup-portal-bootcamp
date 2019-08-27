export const LOAD_EVENT_DATA = 'LOAD_EVENT_DATA';
export const LOAD_EVENT_DATA_SUCCESS = 'LOAD_EVENT_DATA_SUCCESS';
export const LOAD_EVENT_DATA_FAILURE = 'LOAD_EVENT_DATA_FAILURE';

export const loadEventData = () => ({ type: LOAD_EVENT_DATA });
export const loadEventDataSuccess = eventData => ({
  type: LOAD_EVENT_DATA_SUCCESS,
  eventData
});
export const loadEventDataFailure = () => ({ type: LOAD_EVENT_DATA_FAILURE });

export const INIT_STATE = {
  eventData: []
};

export default (state = INIT_STATE, action) => {
  switch (action.type) {
    case LOAD_EVENT_DATA_SUCCESS:
      return INIT_STATE.eventData.concat(action.eventData);
    default:
      return state;
  }
};
