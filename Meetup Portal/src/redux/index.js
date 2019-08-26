import { combineReducers } from 'redux';
import { all } from 'redux-saga/effects';
import cityDataReducer from './city/ducks';
import citySaga from './city/sagas';

export const rootReducer = combineReducers({
  cityDataReducer
});

export function* rootSaga() {
  yield all([
    citySaga(),
  ]);
}