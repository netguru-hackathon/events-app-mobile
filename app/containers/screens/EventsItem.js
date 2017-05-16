import React from 'react';
import PropTypes from 'prop-types';
import {
  Image,
  StyleSheet,
  Text,
  TouchableHighlight,
  View,
} from 'react-native';
import colors from '../../constants/colors';

const styles = StyleSheet.create({
  image: {
    width: 100,
    height: 100,
  },
});

export const EventsItem = ({ event, onPress }) =>
  <TouchableHighlight
    underlayColor={colors.TRANSPARENT}
    onPress={onPress}
  >
    <View>
      <Text>{event.name}</Text>
      <Text>{event.description}</Text>
      <Image source={{ uri: event.image }} style={styles.image} />
    </View>
  </TouchableHighlight>;

EventsItem.propTypes = {
  event: PropTypes.shape({
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
  }).isRequired,
  onPress: PropTypes.func.isRequired,
};

export default EventsItem;
