const axios = require('axios');

const PROXY_URL = 'https://cors-anywhere.herokuapp.com/';
const API_KEY = '37kkhasb4so6gmub27nc92n55f';
// const baseUrl = 'https://api.meetup.com/';

const getMeetup = async () => {
  try {
    return await axios.get(
      `${PROXY_URL}https://api.meetup.com/find/upcoming_events?key=${API_KEY}&sign=true&photo-host=public&page=20?`,
      { headers: { Authorization: 'Bearer e06a81343e74b977c229e6b8307f3583' } }
    );
  } catch (error) {
    console.error(error);
  }
};

export const countBreeds = async () => {
  const breeds = await getMeetup();
  console.log(breeds);
};
