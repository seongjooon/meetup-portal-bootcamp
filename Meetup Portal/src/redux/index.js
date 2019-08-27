import { combineReducers } from 'redux';
import { all } from 'redux-saga/effects';
import eventData from './event/ducks';
import eventSaga from './event/sagas';

export const rootReducer = combineReducers({
  eventData
});

export function* rootSaga() {
  yield all([eventSaga()]);
}
