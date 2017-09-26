import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import styled from 'styled-components/native';
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

const Container = styled.View`
  margin: 10px;
  align-items: center;
`;

const UserAvatar = styled.Image`
  width: 120px;
  height: 120px;
  margin: 5px;
`;

const UserName = styled.Text`
  font-size: 18px;
  font-weight: bold;
`;

const UserEmail = styled.Text`
  margin-bottom: 10px;
`;

const styles = StyleSheet.create({
  icon: {
    width: 20,
    height: 20,
  },
});

class Settings extends Component {
  static propTypes = {
    user: PropTypes.shape({
      avatarUrl: PropTypes.string.isRequired,
      email: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
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
      <Container>
        <UserAvatar source={{ uri: user.avatarUrl }} />
        <UserName>{user.name}</UserName>
        <UserEmail>{user.email}</UserEmail>
        <Button
          onPress={this.logout.bind(this)}
          title={I18n.t('logout')}
          color={colors.BLUE}
        />
      </Container>
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
