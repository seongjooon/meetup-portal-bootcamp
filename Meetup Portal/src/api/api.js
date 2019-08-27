import axios from 'axios';
import { PROXY_URL, API_URL } from '../constant/constants';

export const getMeetupApi = (lat = 40.712586, lng = -74.006839) => {
  try {
    return axios({
      method: 'GET',
      url: `${PROXY_URL}${API_URL}find/upcoming_events?&sign=true&photo-host=public&page=10&lat=${lat}&lon=${lng}`,
      headers: {
        Authorization: 'Bearer 73b3dd01ab144d67c9e5eccceeb1fa07'
      }
    }).then(res => res.data.events);
  } catch (error) {
    console.log(error);
  }
};

export const getHostDataApi = (eventUrlName, eventId) => {
  try {
    return axios({
      method: 'GET',
      url: `${PROXY_URL}${API_URL}${eventUrlName}/events/${eventId}/hosts?&sign=true&photo-host=public`,
      headers: {
        Authorization: 'Bearer 73b3dd01ab144d67c9e5eccceeb1fa07'
      }
    }).then(res => res.data);
  } catch (error) {
    console.log(error);
  }
};
