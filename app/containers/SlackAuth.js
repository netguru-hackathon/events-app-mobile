import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  WebView,
} from 'react-native';
import url from 'url';
import UserAgentIOS from 'rn-ios-user-agent';

class SlackAuth extends Component {
  static propTypes = {
    navigation: PropTypes.shape({
      navigate: PropTypes.func.isRequired,
      state: PropTypes.shape({
        params: PropTypes.shape({
          authURL: PropTypes.string.isRequired,
        }),
      }),
    }).isRequired,
  }

  componentWillMount() {
    UserAgentIOS.set('Mozilla/5.0 Google');
  }

  webViewRequest = (event) => {
    const parsedUrl = url.parse(event.url, true);
    const { navigation } = this.props;

    if (parsedUrl.hostname === 'localhost' && parsedUrl.query.error) {
      navigation.navigate('Login');
      return false;
    }
    if (parsedUrl.hostname === 'localhost' && parsedUrl.query.code) {
      navigation.navigate('AccessTokenFetcher', { code: parsedUrl.query.code });
      return false;
    }
    return true;
  }

  render() {
    const { params } = this.props.navigation.state;

    return (
      <WebView
        source={{ uri: params.authURL }}
        onShouldStartLoadWithRequest={this.webViewRequest}
      />
    );
  }
}

export default SlackAuth;
