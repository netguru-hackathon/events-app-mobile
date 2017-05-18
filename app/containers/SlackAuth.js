import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import {
  Platform,
  WebView,
} from 'react-native';
import url from 'url';
import UserAgentIOS from 'rn-ios-user-agent';

class SlackAuth extends Component {
  static propTypes = {
    isStarted: PropTypes.bool.isRequired,
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
    if (Platform.OS === 'ios') { UserAgentIOS.set('Mozilla/5.0 Google'); }
  }

  webViewRequest = (event) => {
    const parsedUrl = url.parse(event.url, true);
    const { navigation, isStarted } = this.props;

    if (isStarted) return false;
    if (parsedUrl.hostname === 'localhost' && parsedUrl.query.error) {
      navigation.navigate('Login');
      return false;
    }
    if (parsedUrl.hostname === 'localhost' && parsedUrl.query.code) {
      navigation.navigate('AccessTokenFetcher', { code: parsedUrl.query.code });
      this.vebview.stopLoading();
      return false;
    }
    return true;
  }

  render() {
    const { params } = this.props.navigation.state;

    return (
      <WebView
        ref={(c) => { this.vebview = c; }}
        source={{ uri: params.authURL }}
        userAgent={'Mozilla/5.0 Google'}
        onShouldStartLoadWithRequest={this.webViewRequest}
        onNavigationStateChange={this.webViewRequest}
      />
    );
  }
}

const mapStateToProps = state => ({
  isStarted: state.auth.isStarted,
});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(SlackAuth);
