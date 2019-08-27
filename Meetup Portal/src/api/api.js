import axios from 'axios';

export const getMeetupApi = () => {
  const PROXY_URL = 'https://cors-anywhere.herokuapp.com/';
  const API_URL = 'https://api.meetup.com/';

  try {
    return axios({
      method: 'GET',
      url: `${PROXY_URL}${API_URL}find/upcoming_events?&sign=true&photo-host=public&page=10&lon=-74.006839&lat=40.712586`,
      headers: {
        Authorization: 'Bearer 73b3dd01ab144d67c9e5eccceeb1fa07'
      }
    }).then(res => res.data.events);
  } catch (error) {
    console.log(error);
  }
};

export const getHostDataApi = (eventUrlName, eventId) => {
  const PROXY_URL = 'https://cors-anywhere.herokuapp.com/';
  const API_URL = 'https://api.meetup.com/';

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
