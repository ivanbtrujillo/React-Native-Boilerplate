import axios from 'axios';

export const types = {
  FETCH_ITEM: 'FETCH_ITEM',
};


const ROOT_URL = 'http://jsonplaceholder.typicode.com';

export function fetchPost(id) {
  const request = axios.get(`${ROOT_URL}/posts/${id}`);
  return {
    type: types.FETCH_ITEM,
    payload: request,
  };
}
