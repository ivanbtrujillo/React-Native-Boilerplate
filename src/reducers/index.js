import { combineReducers } from 'redux';
import ListReducer from '../containers/List/reducers';
import DetailReducer from '../containers/Detail/reducers';
import { reducer as FormReducer } from 'redux-form';

const rootReducer = combineReducers({
  posts: ListReducer,
  post: DetailReducer,
});

export default rootReducer;
