import React from 'react';
import { StackNavigator } from 'react-navigation';
import DashboardNavigator from './DashboardNavigator';
import AccessTokenFetcher from './screens/AccessTokenFetcher';
import Login from './screens/Login';

const RootNavigator = StackNavigator({
  Login: {
    screen: Login,
  },
  DashboardNavigator: {
    // eslint-disable-next-line
    screen: ({ navigation }) =>
      <DashboardNavigator
        screenProps={{ rootNavigation: navigation }}
      />,
  },
  AccessTokenFetcher: {
    screen: AccessTokenFetcher,
    path: 'oauth',
  },
}, {
  headerMode: 'none',
});

export default RootNavigator;
