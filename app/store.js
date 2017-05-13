import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import axiosMiddleware from 'redux-axios-middleware';
import { composeWithDevTools } from 'remote-redux-devtools';
import { autoRehydrate } from 'redux-persist';

import axiosClient from './api/client';
import reducers from './reducers/index';

const store = composeWithDevTools(
  applyMiddleware(
    thunk,
    axiosMiddleware(axiosClient, { returnRejectedPromiseOnError: true }),
  ),
  autoRehydrate(),
)(createStore)(reducers);

export default store;
