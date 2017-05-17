import React, { Component } from 'react';
import {
  AsyncStorage,
  Platform,
} from 'react-native';
import { Provider } from 'react-redux';
import { persistStore } from 'redux-persist';
import store from './store';
import RootRouter from './containers/RootRouter';
import { RenderActivityIndicator } from './containers/shared/RenderActivityIndicator';

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
    if (!this.state.rehydrated) return <RenderActivityIndicator />;

    return (
      <Provider store={store}>
        <RootRouter uriPrefix={prefix} />
      </Provider>
    );
  }
}

export default App;
