import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {
  Button,
  Image,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import I18n from '../../utils/translations';
import colors from '../../constants/colors';

// actions
import { logoutUser } from '../../actions/auth';

const styles = StyleSheet.create({
  icon: {
    width: 20,
    height: 20,
  },
  view: {
    margin: 10,
  },
});

class Settings extends Component {
  static propTypes = {
    token: PropTypes.string.isRequired,
    logoutUser: PropTypes.func.isRequired,
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

  logout() {
    this.props.logoutUser();
  }

  render() {
    const { token } = this.props;

    return (
      <View style={styles.view}>
        <Button
          onPress={this.logout.bind(this)}
          title={I18n.t('logout')}
          color="#841584"
        />
        <Text>{token}</Text>
      </View>
    );
  }
}

const mapStateToProps = state => ({
  token: state.auth.item.token,
});

const mapDispatchToProps = {
  logoutUser,
};

export default connect(mapStateToProps, mapDispatchToProps)(Settings);
