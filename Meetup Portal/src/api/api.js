import axios from 'axios';

export const getMeetupApi = () => {
  const PROXY_URL = 'https://cors-anywhere.herokuapp.com/';
  const API_URL = 'https://api.meetup.com/';
  const API_KEY = '37kkhasb4so6gmub27nc92n55f';

  try {
    return axios({
      method: 'GET',
      url: `${PROXY_URL}${API_URL}find/upcoming_events?key=${API_KEY}&sign=true&photo-host=public&page=20?`,
      headers: {
        Authorization: 'Bearer 17099005a2e40aed6e0bf24fc6d12e46'
      }
    }).then(res => {
      return res.data;
    });
  } catch (error) {
    console.log(error);
  }
};
