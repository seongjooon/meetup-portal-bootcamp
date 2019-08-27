import axios from 'axios';

export const getMeetupApi = () => {
  const PROXY_URL = 'https://cors-anywhere.herokuapp.com/';
  const API_URL = 'https://api.meetup.com/';
  // const API_KEY = '37kkhasb4so6gmub27nc92n55f';

  try {
    return axios({
      method: 'GET',
      url: `${PROXY_URL}${API_URL}/find/upcoming_events?&sign=true&photo-host=public&page=10&lon=-74.006839&lat=40.712586`,
      headers: {
        Authorization: 'Bearer 73b3dd01ab144d67c9e5eccceeb1fa07'
      }
    }).then(res => res.data.events);
  } catch (error) {
    console.log(error);
  }
};

