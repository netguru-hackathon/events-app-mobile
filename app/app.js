import React from 'react';
import { Platform } from 'react-native';
import { Provider } from 'react-redux';
import store from './store';
import RootNavigator from './containers/RootNavigator';

const App = () =>
  <Provider store={store}>
    <RootNavigator
      uriPrefix={Platform.OS === 'android' ? 'http://localhost/eventsapp/' : 'eventsapp://'}
    />
  </Provider>;

export default App;
