import axios from 'axios';

export const types = {
  FETCH_LIST: 'FETCH_POSTS',
  FETCH_DETAIL: 'FETCH_POST',
};

const ROOT_URL = 'http://reduxblog.herokuapp.com/api';
const API_KEY = '?key=loquesea';

export function fetchPosts() {
  const request = axios.get(`${ROOT_URL}/posts${API_KEY}`);
  return {
    type: types.FETCH_LIST,
    payload: request,
  };
}

export function fetchPost(id) {
  const request = axios.get(`${ROOT_URL}/posts/${id}${API_KEY}`);
  return {
    type: types.FETCH_DETAIL,
    payload: request,
  };
}
