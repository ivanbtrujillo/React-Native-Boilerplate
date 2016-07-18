import axios from 'axios';

export const types = {
  FETCH_LIST: 'FETCH_LIST',
};

const ROOT_URL = 'http://jsonplaceholder.typicode.com';

export function fetchPosts() {
  const request = axios.get(`${ROOT_URL}/posts`);
  return {
    type: types.FETCH_LIST,
    payload: request,
  };
}

// export function fetchPost(id) {
//   const request = axios.get(`${ROOT_URL}/posts/${id}${API_KEY}`);
//
//   return {
//     type: types.FETCH_DETAIL,
//     payload: request,
//   };
// }
