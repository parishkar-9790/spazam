import {createApi,fetchBaseQuery} from '@reduxjs/toolkit/query';
const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Host': 'shazam-core.p.rapidapi.com',
      'X-RapidAPI-Key': '697112545amsha623a479b80294ap1a39cfjsn597778a05d2b'
    }
  };

  fetch('https://shazam-core.p.rapidapi.com/v1/charts/world', options)
    .then(response => response.json())
    .then(response => console.log(response))
    .catch(err => console.error(err));
  export const shazamCoreApi=createApi
