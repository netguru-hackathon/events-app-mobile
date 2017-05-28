import React, { Component } from 'react';
import PropTypes from 'prop-types';
import OneSignal from 'react-native-onesignal';
import { connect } from 'react-redux';
import RootNavigator from './RootNavigator';
import { setPlayerId } from '../actions/auth';

class RootRouter extends Component {
  static propTypes = {
    isAuthenticated: PropTypes.bool.isRequired,
    uriPrefix: PropTypes.string.isRequired,
    playerId: PropTypes.string.isRequired,
    setPlayerId: PropTypes.func.isRequired,
    user: PropTypes.shape({
      avatarUrl: PropTypes.string.isRequired,
      email: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
    }),
  }

  componentWillMount() {
    this.props.setPlayerId(this.props.playerId);
    if (this.props.isAuthenticated) this.sendOnesignalTags();
  }

  sendOnesignalTags() {
    const { user } = this.props;

    OneSignal.sendTags(user);
  }

  render() {
    const { isAuthenticated, uriPrefix } = this.props;

    return (
      <RootNavigator
        isAuthenticated={isAuthenticated}
        uriPrefix={uriPrefix}
      />
    );
  }
}

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated,
  user: state.auth.item.user,
});

const mapDispatchToProps = {
  setPlayerId,
};

export default connect(mapStateToProps, mapDispatchToProps)(RootRouter);
