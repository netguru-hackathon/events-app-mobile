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
import colors from '../../constants/colors';

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
    headerTitle: I18n.t('settings'),
    headerTintColor: colors.WHITE,
    headerStyle: {
      backgroundColor: colors.BLACK_OPACITY,
    },
  };

  render() {
    const { token } = this.props;

    return (
      <View>
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
