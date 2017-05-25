import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {
  AsyncStorage,
  Button,
  Image,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import I18n from '../../utils/translations';
import colors from '../../constants/colors';
import { RenderActivityIndicator } from '../shared/RenderActivityIndicator';

// actions
import { logoutUser } from '../../actions/auth';

const styles = StyleSheet.create({
  email: {
    marginBottom: 10,
  },
  icon: {
    width: 20,
    height: 20,
  },
  image: {
    width: 120,
    height: 120,
    margin: 5,
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  view: {
    margin: 10,
    alignItems: 'center',
  },
});

class Settings extends Component {
  static propTypes = {
    user: PropTypes.shape({
      email: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      userUrl: PropTypes.string.isRequired,
    }),
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
    AsyncStorage.multiRemove([
      'reduxPersist:auth',
    ]);
  }

  render() {
    const { user } = this.props;

    if (!user) return <RenderActivityIndicator />;

    return (
      <View style={styles.view}>
        <Image source={{ uri: user.avatarUrl }} style={styles.image} />
        <Text style={styles.name}>{user.name}</Text>
        <Text style={styles.email}>{user.email}</Text>
        <Button
          onPress={this.logout.bind(this)}
          title={I18n.t('logout')}
          color={colors.BLUE}
        />
      </View>
    );
  }
}

const mapStateToProps = state => ({
  user: state.auth.item.user,
});

const mapDispatchToProps = {
  logoutUser,
};

export default connect(mapStateToProps, mapDispatchToProps)(Settings);
