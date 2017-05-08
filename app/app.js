import React from 'react';
import { Platform } from 'react-native';
import { Provider } from 'react-redux';
import store from './store';
import RootNavigator from './containers/RootNavigator';

const prefix = Platform.OS === 'android' ? 'http://localhost/eventsapp/' : 'eventsapp://';

const App = () =>
  <Provider store={store}>
    <RootNavigator uriPrefix={prefix} />
  </Provider>;

export default App;
