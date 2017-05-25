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
import { fetchUser } from '../../actions/users';
import { RenderActivityIndicator } from '../shared/RenderActivityIndicator';
import colors from '../../constants/colors';

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
  view: {
    margin: 10,
    alignItems: 'center',
  },
});

class User extends Component {
  static propTypes = {
    fetchUser: PropTypes.func.isRequired,
    isStarted: PropTypes.bool.isRequired,
    isFetching: PropTypes.bool.isRequired,
    user: PropTypes.shape({
      avatarUrl: PropTypes.string.isRequired,
      email: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
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
    const { navigation } = this.props;

    this.props.fetchUser(navigation.state.params.item.id);
  }

  // eslint-disable-next-line
  renderUser() {
    const { isStarted, isFetching, user } = this.props;

    if (isStarted && isFetching) return <RenderActivityIndicator />;

    return (
      <View style={styles.view}>
        <Image source={{ uri: user.avatarUrl }} style={styles.image} />
        <Text style={styles.email}>{user.email}</Text>
      </View>
    );
  }

  render() {
    return (
      <View style={styles.view}>
        {this.renderUser()}
      </View>
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
