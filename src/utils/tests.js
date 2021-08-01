import checkPropTypes from 'check-prop-types';
import { applyMiddleware, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import root from '../reducers/Rootreducer';

export const getelementByTestId = (component, id) => {
  const element = component.find(`[data-test='${id}']`);
  return element;
};

export const checkProps = (component, expectedProps) => {
  const porpsErr = checkPropTypes(
    component.propTypes,
    expectedProps,
    'props',
    component.name
  );
  return porpsErr;
};

export const testStore = (init) => {
  const middleware = [thunk];
  const store = createStore(
    root,
    init,
    composeWithDevTools(applyMiddleware(...middleware))
  );
  return store;
};
