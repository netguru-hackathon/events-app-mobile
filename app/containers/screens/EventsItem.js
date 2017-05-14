import React from 'react';
import PropTypes from 'prop-types';
import {
  Text,
  View,
} from 'react-native';

export const EventsItem = ({ event }) =>
  <View>
    <Text>{event.name}</Text>
    <Text>{event.description}</Text>
  </View>;

EventsItem.propTypes = {
  event: PropTypes.shape({
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
  }).isRequired,
};

export default EventsItem;
