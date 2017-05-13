import React, { Component } from 'react';
import {
  AsyncStorage,
  Platform,
  Text,
} from 'react-native';
import { Provider } from 'react-redux';
import { persistStore } from 'redux-persist';
import store from './store';
import I18n from './utils/translations';
import RootRouter from './containers/RootRouter';

const prefix = Platform.OS === 'android' ? 'http://localhost/eventsapp/' : 'eventsapp://';

class App extends Component {
  state = {
    rehydrated: false,
  }

  componentWillMount() {
    persistStore(store, {
      storage: AsyncStorage,
      whitelist: [
        'auth',
      ],
    }, () => {
      this.setState({ rehydrated: true });
    });
  }

  render() {
    if (!this.state.rehydrated) return <Text>{I18n.t('loading')}</Text>;

    return (
      <Provider store={store}>
        <RootRouter uriPrefix={prefix} />
      </Provider>
    );
  }
}

export default App;
