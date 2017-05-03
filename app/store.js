import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import axiosMiddleware from 'redux-axios-middleware';

import axiosClient from './api/client';
import Reducers from './reducers/index';

const store = applyMiddleware(
  thunk,
  axiosMiddleware(axiosClient, { returnRejectedPromiseOnError: true }),
)(createStore)(Reducers);

export default store;
