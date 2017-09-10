import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import styled from 'styled-components/native';
import {
  Button,
  Dimensions,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import I18n from '../../utils/translations';
import { RenderActivityIndicator } from '../shared/RenderActivityIndicator';
import colors from '../../constants/colors';
import EventItems from './EventItems';

// actions
import { fetchEvent } from '../../actions/events';

const { width, height } = Dimensions.get('window');

const ButtonWrapper = styled.View`
  flex-direction: row;
  justify-content: flex-start;
  margin-top: 10;
  margin-left: 10;
`;

const DescriptionContainer = styled.View`
  padding-top: 10;
  padding-bottom: 10;
  padding-right: 10;
  padding-left: 10;
`;

const EventImage = styled.Image`
  margin-top: 0;
  width: ${width};
  height: ${0.25 * height};
`;

const styles = StyleSheet.create({
  icon: {
    width: 20,
    height: 20,
  },
});

class Event extends Component {
  static propTypes = {
    fetchEvent: PropTypes.func.isRequired,
    isStarted: PropTypes.bool.isRequired,
    isFetching: PropTypes.bool.isRequired,
    event: PropTypes.shape({
      name: PropTypes.string,
      description: PropTypes.string,
      image: PropTypes.string,
    }).isRequired,
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
        position: 'absolute',
        backgroundColor: colors.BLACK_OPACITY,
        zIndex: 100,
        top: 0,
        left: 0,
        right: 0,
      },
    };
  };

  componentWillMount() {
    const { navigation } = this.props;

    this.props.fetchEvent(navigation.state.params.item.id);
  }

  // eslint-disable-next-line
  renderEvent() {
    const { isStarted, isFetching, event, navigation } = this.props;

    if (isStarted && isFetching) return <RenderActivityIndicator />;
    return (
      <View>
        <EventImage source={{ uri: event.image }} />
        <ButtonWrapper>
          <Button
            onPress={() => navigation.navigate('EventParticipants')}
            title={I18n.t('Event.participants')}
            color={colors.BLUE}
          />
        </ButtonWrapper>
        <DescriptionContainer>
          <Text>{event.description}</Text>
        </DescriptionContainer>
      </View>
    );
  }

  renderEventItems() {
    const { isStarted, isFetching, event } = this.props;

    if (isStarted && isFetching) return <RenderActivityIndicator />;
    return <EventItems items={event.items} />;
  }

  render() {
    return (
      <ScrollView>
        {this.renderEvent()}
        {this.renderEventItems()}
      </ScrollView>
    );
  }
}

const mapStateToProps = state => ({
  isStarted: state.event.isStarted,
  isFetching: state.event.isFetching,
  event: state.event.item,
});

const mapDispatchToProps = {
  fetchEvent,
};

export default connect(mapStateToProps, mapDispatchToProps)(Event);
