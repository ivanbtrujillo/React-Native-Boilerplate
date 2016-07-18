import { types } from './actions';

const INITIAL_STATE = { post: null };

export function reducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case types.FETCH_ITEM:
      return { ...state, post: action.payload.data };
    default:
      return state;
  }
}
