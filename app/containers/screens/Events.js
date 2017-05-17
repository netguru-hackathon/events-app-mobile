import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {
  FlatList,
  Image,
  StyleSheet,
  View,
} from 'react-native';
import I18n from '../../utils/translations';
import { fetchEvents } from '../../actions/events';
import { EventsItem } from './EventsItem';
import { RenderActivityIndicator } from '../shared/RenderActivityIndicator';
import colors from '../../constants/colors';

const styles = StyleSheet.create({
  icon: {
    width: 20,
    height: 20,
  },
  separator: {
    height: 5,
    marginLeft: 15,
    marginRight: 15,
    backgroundColor: colors.TRANSPARENT,
  },
  view: {
    marginTop: 5,
  },
});

class Events extends Component {
  static propTypes = {
    fetchEvents: PropTypes.func.isRequired,
    isStarted: PropTypes.bool.isRequired,
    isFetching: PropTypes.bool.isRequired,
    events: PropTypes.arrayOf(PropTypes.object).isRequired,
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
    headerTitle: I18n.t('events'),
    headerTintColor: colors.WHITE,
    headerStyle: {
      backgroundColor: colors.BLACK_OPACITY,
    },
  };

  componentWillMount() {
    this.props.fetchEvents();
  }

  // eslint-disable-next-line
  renderEvent({ item }) {
    const { navigation } = this.props;

    return (
      <EventsItem
        key={`event${item.id}`}
        event={item}
        onPress={() => navigation.navigate('Event', { item })}
      />
    );
  }

  // eslint-disable-next-line
  renderSeparator() {
    return (
      <View style={styles.separator} />
    );
  }

  renderEventsList() {
    const { isStarted, isFetching, events } = this.props;

    if (isStarted && isFetching) return <RenderActivityIndicator />;
    return (
      <FlatList
        /* https://github.com/facebook/react-native/issues/13316 */
        removeClippedSubviews={false}
        data={events}
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
  isStarted: state.events.isStarted,
  isFetching: state.events.isFetching,
  events: state.events.items,
});

const mapDispatchToProps = {
  fetchEvents,
};

export default connect(mapStateToProps, mapDispatchToProps)(Events);
