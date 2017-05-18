import React from 'react';
import PropTypes from 'prop-types';
import { StackNavigator } from 'react-navigation';
import DashboardNavigator from './DashboardNavigator';
import SlackAuth from './SlackAuth';
import AccessTokenFetcher from './screens/AccessTokenFetcher';
import Login from './screens/Login';

const RootNavigator = ({ isAuthenticated, uriPrefix }) => {
  if (isAuthenticated) return <AuthenticatedNavigator />;
  return <NotAuthenticatedNavigator uriPrefix={uriPrefix} />;
};

const AuthenticatedNavigator = StackNavigator({
  DashboardNavigator: {
    screen: DashboardNavigator,
  },
}, {
  headerMode: 'none',
});

const NotAuthenticatedNavigator = StackNavigator({
  Login: {
    screen: Login,
  },
  SlackAuth: {
    screen: SlackAuth,
  },
  AccessTokenFetcher: {
    screen: AccessTokenFetcher,
  },
}, {
  headerMode: 'none',
});

RootNavigator.propTypes = {
  isAuthenticated: PropTypes.bool.isRequired,
  uriPrefix: PropTypes.string.isRequired,
};

export default RootNavigator;
