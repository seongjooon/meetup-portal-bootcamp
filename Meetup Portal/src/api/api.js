import axios from 'axios';

export const getMeetupApi = () => {
  const PROXY_URL = 'https://cors-anywhere.herokuapp.com/';
  const API_URL = 'https://api.meetup.com/';
  // const API_KEY = '37kkhasb4so6gmub27nc92n55f';

  try {
    return axios({
      method: 'GET',
      url: `${PROXY_URL}${API_URL}/find/upcoming_events?&sign=true&photo-host=public&page=10&lon=127.059162&lat=37.506024`,
      // url: `${PROXY_URL}${API_URL}find/upcoming_events?key=${API_KEY}&sign=true&photo-host=public&page=20?`,
      headers: {
        Authorization: 'Bearer 73b3dd01ab144d67c9e5eccceeb1fa07'
      }
    }).then(res => {
      return res.data.events;
    });
  } catch (error) {
    console.log(error);
  }
};

// export const getHostProfile = () => {
//   const PROXY_URL = 'https://cors-anywhere.herokuapp.com/';
//   const API_URL = 'https://api.meetup.com/';

//   try {
//     return axios({
//       method: 'GET',
//       url: `${PROXY_URL}${API_URL}${e.g.un}/events/${e.id}/hosts?&sign=true&photo-host=public`,
//       headers: {
//         Authorization: 'Bearer 73b3dd01ab144d67c9e5eccceeb1fa07'
//       }
//     }).then(res => {
//       return res.data.events;
//     });
//   } catch (error) {
//     console.log(error);
//   }
// };
