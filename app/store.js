import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import axiosMiddleware from 'redux-axios-middleware';
import { composeWithDevTools } from 'remote-redux-devtools';
import { autoRehydrate } from 'redux-persist';

import { client, clientOptions } from './api/client';
import reducers from './reducers/index';

const store = composeWithDevTools(
  applyMiddleware(
    thunk,
    axiosMiddleware(client, clientOptions),
  ),
  autoRehydrate(),
)(createStore)(reducers);

export default store;
