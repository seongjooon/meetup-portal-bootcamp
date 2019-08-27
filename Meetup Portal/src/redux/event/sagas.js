import { call, put, takeEvery } from 'redux-saga/effects';
import { LOAD_EVENT_DATA, loadEventDataSuccess, loadEventDataFailure } from './ducks';
import * as api from '../../api/api';

function* fetchEventData(action) {
  try {
    const eventData = yield call(api.getMeetupApi);
    yield put(loadEventDataSuccess(eventData));
  } catch (e) {
    yield put(loadEventDataFailure());
  }
}

export default function* citySaga() {
  yield takeEvery(LOAD_EVENT_DATA, fetchEventData);
}


