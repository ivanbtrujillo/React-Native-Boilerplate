import { FETCH_DETAIL } from './actions';

const INITIAL_STATE = { post: null };

export default function (state = INITIAL_STATE, action) {
  switch (action.type) {
    case FETCH_DETAIL:
      return { ...state, post: action.payload.data };
    default:
      return state;
  }
}
