import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import styled from 'styled-components/native';
import {
  Image,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import I18n from '../../utils/translations';
import { RenderActivityIndicator } from '../shared/RenderActivityIndicator';
import colors from '../../constants/colors';

// actions
import { fetchUser } from '../../actions/users';

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

class User extends Component {
  static propTypes = {
    fetchUser: PropTypes.func.isRequired,
    isStarted: PropTypes.bool.isRequired,
    isFetching: PropTypes.bool.isRequired,
    user: PropTypes.shape({
      avatarUrl: PropTypes.string,
      email: PropTypes.string,
      name: PropTypes.string,
    }),
    navigation: PropTypes.shape({
      state: PropTypes.object.isRequired,
      navigate: PropTypes.func.isRequired,
    }).isRequired,
  };

  static navigationOptions = (props) => {
    const { navigation } = props;

    return {
      tabBarLabel: I18n.t('events'),
      showIcon: true,
      tabBarIcon: ({ tintColor }) => (
        <Image
          source={require('../../img/EventsIcon.png')}
          style={[styles.icon, { tintColor }]}
        />
      ),
      headerTitle: `${navigation.state.params.item.name}`,
      headerTintColor: colors.WHITE,
      headerStyle: {
        backgroundColor: colors.BLACK_OPACITY,
      },
    };
  };

  componentWillMount() {
    this.props.fetchUser(this.props.navigation.state.params.item.id);
  }

  renderUser = () => {
    const { isStarted, isFetching, user } = this.props;

    if (isStarted && isFetching) return <RenderActivityIndicator />;
    return (
      <View>
        <UserAvatar source={{ uri: user.avatarUrl }} />
        <UserName>{user.name}</UserName>
        <UserEmail>{user.email}</UserEmail>
      </View>
    );
  }

  render() {
    return (
      <Container>
        {this.renderUser()}
      </Container>
    );
  }
}

const mapStateToProps = state => ({
  isStarted: state.user.isStarted,
  isFetching: state.user.isFetching,
  user: state.user.item,
});

const mapDispatchToProps = {
  fetchUser,
};

export default connect(mapStateToProps, mapDispatchToProps)(User);
