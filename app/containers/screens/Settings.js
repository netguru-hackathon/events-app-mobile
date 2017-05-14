import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {
  Image,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import I18n from '../../utils/translations';

const styles = StyleSheet.create({
  icon: {
    width: 20,
    height: 20,
  },
});

class Settings extends Component {
  static propTypes = {
    token: PropTypes.string.isRequired,
  };

  static navigationOptions = {
    tabBarLabel: I18n.t('settings'),
    showIcon: true,
    tabBarIcon: ({ tintColor }) => (
      <Image
        source={require('../../img/SettingsIcon.png')}
        style={[styles.icon, { tintColor }]}
      />
    ),
  };

  render() {
    const { token } = this.props;

    return (
      <View>
        <Text>{I18n.t('settingsTitle')}</Text>
        <Text>{token}</Text>
      </View>
    );
  }
}

const mapStateToProps = state => ({
  token: state.auth.item.token,
});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Settings);
