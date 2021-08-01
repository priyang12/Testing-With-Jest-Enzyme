import { combineReducers } from 'redux';
import postReducer from './postReducer';

const root = combineReducers({
  post: postReducer,
});

export default root;
