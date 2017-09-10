import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import styled from 'styled-components/native';
import {
  FlatList,
  Image,
  StyleSheet,
  View,
} from 'react-native';
import I18n from '../../utils/translations';
import { EventsItem } from './EventsItem';
import { RenderActivityIndicator } from '../shared/RenderActivityIndicator';
import colors from '../../constants/colors';

// actions
import {
  fetchEvents,
  fetchEventsNext,
  refreshEvents,
} from '../../actions/events';

const Container = styled.View`
  margin-top: 5;
`;

const Separator = styled.View`
  height: 5;
  margin-left: 15;
  margin-right: 15;
  background-color: ${colors.TRANSPARENT};
`;

const styles = StyleSheet.create({
  icon: {
    width: 20,
    height: 20,
  },
});

class Events extends Component {
  static propTypes = {
    fetchEvents: PropTypes.func.isRequired,
    fetchEventsNext: PropTypes.func.isRequired,
    refreshEvents: PropTypes.func.isRequired,
    isFetching: PropTypes.bool.isRequired,
    isRefreshing: PropTypes.bool.isRequired,
    events: PropTypes.arrayOf(PropTypes.object).isRequired,
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
    headerTitle: I18n.t('events'),
    headerTintColor: colors.WHITE,
    headerStyle: {
      backgroundColor: colors.BLACK_OPACITY,
    },
  };

  componentWillMount() {
    this.props.fetchEvents();
  }

  onLoadNextPage = () => {
    if (!this.props.next) return;
    this.props.fetchEventsNext();
  }

  onRefresh = () => this.props.refreshEvents();

  renderEvent = ({ item }) => (
    <EventsItem
      key={`event${item.id}`}
      event={item}
      onPress={() => this.props.navigation.navigate('Event', { item })}
    />
  )

  renderSeparator = () => <Separator />;

  renderEventsList() {
    const { isFetching, isRefreshing, events } = this.props;

    if (isFetching && events.length === 0) return <RenderActivityIndicator />;
    return (
      <FlatList
        /* https://github.com/facebook/react-native/issues/13316 */
        removeClippedSubviews={false}
        data={events}
        keyExtractor={item => item.id}
        ItemSeparatorComponent={this.renderSeparator}
        renderItem={this.renderEvent}
        onEndReached={this.onLoadNextPage}
        onEndReachedThreshold={100}
        onRefresh={this.onRefresh}
        refreshing={isRefreshing}
      />
    );
  }

  render() {
    return (
      <Container>
        {this.renderEventsList()}
      </Container>
    );
  }
}

const mapStateToProps = state => ({
  isFetching: state.events.isFetching,
  isRefreshing: state.events.isRefreshing,
  events: state.events.items,
  next: state.events.links.next,
});

const mapDispatchToProps = {
  fetchEvents,
  fetchEventsNext,
  refreshEvents,
};

export default connect(mapStateToProps, mapDispatchToProps)(Events);
