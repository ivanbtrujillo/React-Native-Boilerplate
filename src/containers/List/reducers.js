import { FETCH_LIST } from './actions';

const INITIAL_STATE = { all: [] };

export default function(state = INITIAL_STATE, action) {
  switch(action.type) {
    case FETCH_LIST:
      return { ...state, all: action.payload.data };
    default:
      return state;
  }
}
