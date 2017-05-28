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
import {
  fetchEventParticipants,
  fetchEventParticipantsNext,
  refreshEventParticipants,
  initializeEventParticipants,
} from '../../actions/events';
import { RenderActivityIndicator } from '../shared/RenderActivityIndicator';
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
    fetchEventParticipants: PropTypes.func.isRequired,
    fetchEventParticipantsNext: PropTypes.func.isRequired,
    refreshEventParticipants: PropTypes.func.isRequired,
    initializeEventParticipants: PropTypes.func.isRequired,
    isFetching: PropTypes.bool.isRequired,
    isRefreshing: PropTypes.bool.isRequired,
    eventParticipants: PropTypes.arrayOf(PropTypes.object),
    next: PropTypes.string,
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
    this.props.initializeEventParticipants();
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

  onLoadNextPage() {
    if (!this.props.next) return;
    this.props.fetchEventParticipantsNext();
  }

  onRefresh() {
    this.props.refreshEventParticipants();
  }

  // eslint-disable-next-line
  renderSeparator() {
    return (
      <View style={styles.separator} />
    );
  }

  renderEventsList() {
    const { isFetching, isRefreshing, eventParticipants } = this.props;

    if (isFetching && eventParticipants.length === 0) return <RenderActivityIndicator />;
    return (
      <FlatList
        /* https://github.com/facebook/react-native/issues/13316 */
        removeClippedSubviews={false}
        data={eventParticipants}
        keyExtractor={item => item.id}
        ItemSeparatorComponent={this.renderSeparator}
        // eslint-disable-next-line
        renderItem={this.renderEvent.bind(this)}
        onEndReached={this.onLoadNextPage.bind(this)}
        onEndReachedThreshold={100}
        onRefresh={this.onRefresh.bind(this)}
        refreshing={isRefreshing}
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
  isFetching: state.eventParticipants.isStarted,
  isRefreshing: state.eventParticipants.isRefreshing,
  eventParticipants: state.eventParticipants.items,
  next: state.eventParticipants.links.next,
});

const mapDispatchToProps = {
  fetchEventParticipants,
  fetchEventParticipantsNext,
  refreshEventParticipants,
  initializeEventParticipants,
};

export default connect(mapStateToProps, mapDispatchToProps)(EventParticipants);
