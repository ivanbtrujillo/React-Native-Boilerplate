import { combineReducers } from 'redux';
import { reducer as ListReducer } from '../containers/ListContainer/reducers';
import { reducer as DetailReducer } from '../containers/DetailContainer/reducers';
import { reducer as FormReducer } from 'redux-form';

const rootReducer = combineReducers({
  posts: ListReducer,
  post: DetailReducer,
});

export default rootReducer;
