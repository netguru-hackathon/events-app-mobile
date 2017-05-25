import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableHighlight,
  View,
} from 'react-native';
import I18n from '../../utils/translations';
import { fetchEventParticipants } from '../../actions/events';
import colors from '../../constants/colors';

const styles = StyleSheet.create({
  icon: {
    width: 20,
    height: 20,
  },
  image: {
    width: 40,
    height: 40,
    margin: 5,
  },
  name: {
    fontWeight: 'bold',
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.WHITE,
  },
  separator: {
    height: 5,
    marginRight: 15,
    marginLeft: 15,
    backgroundColor: colors.TRANSPARENT,
  },
  view: {
    marginTop: 5,
  },
});

class EventParticipants extends Component {
  static propTypes = {
    eventParticipants: PropTypes.arrayOf(PropTypes.object),
    fetchEventParticipants: PropTypes.func.isRequired,
    navigation: PropTypes.shape({
      state: PropTypes.object.isRequired,
      navigate: PropTypes.func.isRequired,
    }).isRequired,
  };

  static navigationOptions = {
    tabBarLabel: I18n.t('events'),
    showIcon: true,
    tabBarIcon: ({ tintColor }) => (
      <Image
        source={require('../../img/EventsIcon.png')}
        style={[styles.icon, { tintColor }]}
      />
    ),
    headerTitle: I18n.t('EventParticipants.participants'),
    headerTintColor: colors.WHITE,
    headerStyle: {
      backgroundColor: colors.BLACK_OPACITY,
    },
  };

  componentWillMount() {
    this.props.fetchEventParticipants();
  }

  // eslint-disable-next-line
  renderEvent({ item }) {
    const { navigation } = this.props;

    return (
      <TouchableHighlight
        underlayColor={colors.TRANSPARENT}
        onPress={() => navigation.navigate('User', { item })}
      >
        <View style={styles.row}>
          <Image source={{ uri: item.avatarUrl }} style={styles.image} />
          <View style={styles.descriptionContainer}>
            <Text style={styles.name}>{item.name}</Text>
            <Text>{item.email}</Text>
          </View>
        </View>
      </TouchableHighlight>
    );
  }

  // eslint-disable-next-line
  renderSeparator() {
    return (
      <View style={styles.separator} />
    );
  }

  renderEventsList() {
    const { eventParticipants } = this.props;

    return (
      <FlatList
        /* https://github.com/facebook/react-native/issues/13316 */
        removeClippedSubviews={false}
        data={eventParticipants}
        keyExtractor={item => item.id}
        ItemSeparatorComponent={this.renderSeparator}
        // eslint-disable-next-line
        renderItem={this.renderEvent.bind(this)}
      />
    );
  }

  render() {
    return (
      <View style={styles.view}>
        {this.renderEventsList()}
      </View>
    );
  }
}

const mapStateToProps = state => ({
  isStarted: state.eventParticipants.isStarted,
  isFetching: state.eventParticipants.isFetching,
  eventParticipants: state.eventParticipants.items,
});

const mapDispatchToProps = {
  fetchEventParticipants,
};

export default connect(mapStateToProps, mapDispatchToProps)(EventParticipants);
