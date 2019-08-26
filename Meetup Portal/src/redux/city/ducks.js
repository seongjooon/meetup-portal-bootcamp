export const LOAD_CITY_DATA = 'LOAD_CITY_DATA';
export const LOAD_CITY_DATA_SUCCESS = 'LOAD_CITY_DATA_SUCCESS';
export const LOAD_CITY_DATA_FAILURE = 'LOAD_CITY_DATA_FAILURE';

export const loadCityData = () => ({ type: LOAD_CITY_DATA });
export const loadCityDataSuccess = cityData => ({
  type: LOAD_CITY_DATA_SUCCESS,
  cityData
});
export const loadCityDataFailure = () => ({ type: LOAD_CITY_DATA_FAILURE });

export const INIT_STATE = {
  cityData: {}
};

export default (state = INIT_STATE, action) => {
  switch (action.type) {
    case LOAD_CITY_DATA_SUCCESS:
      return { cityData: action.cityData };
    default:
      return state;
  }
};
