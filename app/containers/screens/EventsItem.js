import React from 'react';
import PropTypes from 'prop-types';
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
const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
  },
  description: {
    fontSize: 14,
    width: width - 90,
  },
  image: {
    margin: 5,
    width: 70,
    height: 70,
  },
  name: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  row: {
    backgroundColor: colors.WHITE,
  },
});

export const EventsItem = ({ event, onPress }) =>
  <TouchableHighlight
    style={styles.row}
    underlayColor={colors.TRANSPARENT}
    onPress={onPress}
  >
    <View style={styles.container}>
      <Image source={{ uri: event.image }} style={styles.image} />
      <View>
        <Text style={styles.name}>{event.name}</Text>
        <Text
          style={styles.description}
          ellipsizeMode={'tail'}
          numberOfLines={3}
        >
          {event.description}
        </Text>
      </View>
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
