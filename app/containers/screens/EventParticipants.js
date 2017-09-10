import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import styled from 'styled-components/native';
import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableHighlight,
  View,
} from 'react-native';
import I18n from '../../utils/translations';
import { RenderActivityIndicator } from '../shared/RenderActivityIndicator';
import colors from '../../constants/colors';

// actions
import {
  fetchEventParticipants,
  fetchEventParticipantsNext,
  refreshEventParticipants,
  initializeEventParticipants,
} from '../../actions/events';

const Container = styled.View`
  margin-top: 5px;
`;

const EventParticipantContainer = styled.View`
  flex-direction: row;
  align-items: center;
  background-color: ${colors.WHITE};
`;

const EventParticipantAvatar = styled.Image`
  width: 40px;
  height: 40px;
  margin: 5px;
`;

const EventParticipantName = styled.Text`
  font-weight: bold;
`;

const Separator = styled.View`
  height: 5px;
  margin-right: 15px;
  margin-left: 15px;
  background-color: ${colors.TRANSPARENT};
`;

const styles = StyleSheet.create({
  icon: {
    width: 20,
    height: 20,
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

  onRefresh = () => this.props.refreshEventParticipants();

  onLoadNextPage = () => {
    if (!this.props.next) return;
    this.props.fetchEventParticipantsNext();
  }

  renderEvent = ({ item }) => (
    <TouchableHighlight
      underlayColor={colors.TRANSPARENT}
      onPress={() => this.props.navigation.navigate('User', { item })}
    >
      <EventParticipantContainer>
        <EventParticipantAvatar source={{ uri: item.avatarUrl }} />
        <View>
          <EventParticipantName>
            {item.name}
          </EventParticipantName>
          <Text>
            {item.email}
          </Text>
        </View>
      </EventParticipantContainer>
    </TouchableHighlight>
  )

  renderSeparator = () => <Separator />;

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
