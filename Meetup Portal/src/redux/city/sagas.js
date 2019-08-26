import { call, put, takeEvery, takeLatest } from 'redux-saga/effects';
import { LOAD_CITY_DATA, loadCityData, loadCityDataSuccess, loadCityDataFailure } from './ducks';
import * as api from '../../api/api';

function* fetchCityData(action) {
  try {
    const cityData = yield call(api.getMeetupApi);
    debugger
    yield put(loadCityDataSuccess(cityData));
  } catch (e) {
    yield put(loadCityDataFailure());
  }
}

export default function* citySaga() {
  yield takeEvery(LOAD_CITY_DATA, fetchCityData);
}


