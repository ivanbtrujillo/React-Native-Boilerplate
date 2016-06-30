import axios from 'axios';

const API_KEY = 'ec6dd0b9e1efc3e61a281c60e9653651';
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast/?appid=${API_KEY}`;

export const FETCH_WEATHER = 'FETCH_WEATHER';

// Action creator
export function fetchWeather(city) {
  const URL = `${ROOT_URL}&q=${city}`;
  const request = axios.get(URL);

  //Action
  return {
    type: FETCH_WEATHER,
    payload: request
  };
}
