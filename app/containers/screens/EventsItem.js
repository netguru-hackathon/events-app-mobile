import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components/native';
import {
  Dimensions,
  Image,
  StyleSheet,
  Text,
  TouchableHighlight,
  View,
} from 'react-native';
import colors from '../../constants/colors';

const { width } = Dimensions.get('window');

const Container = styled.View`
  flex-direction: row;
`;

const EventLink = styled.TouchableHighlight`
  background-color: ${colors.WHITE};
`;

const EventImage = styled.Image`
  width: 70px;
  height: 70px;
  margin: 5px;
`;

const EventContent = styled.View`
  width: ${width - 70};
`;

const EventName = styled.Text`
  font-size: 16px;
  font-weight: bold;
`;

const EventDescription = styled.Text`
  font-size: 14px;
  width: ${width - 90};
`;

export const EventsItem = ({ event, onPress }) =>
  <EventLink
    underlayColor={colors.TRANSPARENT}
    onPress={onPress}
  >
    <Container>
      <EventImage source={{ uri: event.image }} />
      <View>
        <EventName>{event.name}</EventName>
        <EventDescription
          ellipsizeMode={'tail'}
          numberOfLines={3}
        >
          {event.description}
        </EventDescription>
      </View>
    </Container>
  </EventLink>;

EventsItem.propTypes = {
  event: PropTypes.shape({
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
  }).isRequired,
  onPress: PropTypes.func.isRequired,
};

export default EventsItem;
