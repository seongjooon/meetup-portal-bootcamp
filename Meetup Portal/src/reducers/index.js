import { combineReducers } from 'redux';
import { setUpReducer } from './setUpReducer';

export const initState = {
  setUp: []
};

const reducers = values =>
  combineReducers({
    setUp: setUpReducer
  });

export default reducers;
