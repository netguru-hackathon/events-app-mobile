import React from 'react';
import { StackNavigator } from 'react-navigation';
import DashboardNavigator from './DashboardNavigator';

const RootNavigator = StackNavigator({
  DashboardNavigator: {
    // eslint-disable-next-line
    screen: ({ navigation }) =>
      <DashboardNavigator
        screenProps={{ rootNavigation: navigation }}
      />,
  },
}, {
  headerMode: 'none',
});

export default RootNavigator;
