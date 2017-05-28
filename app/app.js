import React, { Component } from 'react';
import OneSignal from 'react-native-onesignal';
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
    this.addEventListeners();
    persistStore(store, {
      storage: AsyncStorage,
      whitelist: [
        'auth',
      ],
    }, () => {
      this.setState({ rehydrated: true });
    });
  }

  // eslint-disable-next-line
  onReceived(notification) {
    // eslint-disable-next-line
    console.log('Notification received: ', notification);
  }

  // eslint-disable-next-line
  onOpened(openResult) {
    // eslint-disable-next-line
    console.log(openResult.notification.payload);
  }

  // eslint-disable-next-line
  onRegistered(notifData) {
    // eslint-disable-next-line
    console.log('Device had been registered for push notifications!', notifData);
  }

  onIds(device) {
    // eslint-disable-next-line
    console.log('Device info: ', device.userId);
    this.playerId = device.userId;
  }

  addEventListeners() {
    OneSignal.addEventListener('received', this.onReceived);
    OneSignal.addEventListener('opened', this.onOpened);
    OneSignal.addEventListener('registered', this.onRegistered);
    OneSignal.addEventListener('ids', this.onIds.bind(this));
  }

  removeEventListeners() {
    OneSignal.removeEventListener('received', this.onReceived);
    OneSignal.removeEventListener('opened', this.onOpened);
    OneSignal.removeEventListener('registered', this.onRegistered);
    OneSignal.removeEventListener('ids', this.onIds.bind(this));
  }

  render() {
    if (!this.state.rehydrated) return <RenderActivityIndicator />;

    return (
      <Provider store={store}>
        <RootRouter
          uriPrefix={prefix}
          playerId={this.playerId}
        />
      </Provider>
    );
  }
}

export default App;
