import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import axiosMiddleware from 'redux-axios-middleware';
import { composeWithDevTools } from 'remote-redux-devtools';

import axiosClient from './api/client';
import reducers from './reducers/index';

const store = composeWithDevTools(
  applyMiddleware(
    thunk,
    axiosMiddleware(axiosClient, { returnRejectedPromiseOnError: true }),
  ),
)(createStore)(reducers);

export default store;
