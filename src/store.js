import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import root from './reducers/Rootreducer';

const middleware = [thunk];
const store = createStore(
  root,
  composeWithDevTools(applyMiddleware(...middleware))
);
export default store;
