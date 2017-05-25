import React, { Component } from 'react';
import moment from 'moment';
import PropTypes from 'prop-types';
import {
  Dimensions,
  FlatList,
  Image,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import I18n from '../../utils/translations';
import colors from '../../constants/colors';

const { width } = Dimensions.get('window');
const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    padding: 5,
    backgroundColor: colors.WHITE,
  },
  content: {
    width: width - 60,
  },
  description: {
    fontSize: 14,
  },
  image: {
    width: 50,
    height: 50,
    margin: 5,
  },
  name: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  separator: {
    height: 5,
    marginRight: 15,
    marginLeft: 15,
    backgroundColor: colors.TRANSPARENT,
  },
});

class EventItems extends Component {
  static propTypes = {
    items: PropTypes.arrayOf(PropTypes.object),
  };

  // eslint-disable-next-line
  renderEventItem({ item }) {
    return (
      <View style={styles.container}>
        <Image source={{ uri: item.image }} style={styles.image} />
        <View style={styles.content}>
          <Text style={styles.name}>{item.name}</Text>
          <Text
            style={styles.description}
            ellipsizeMode={'tail'}
            numberOfLines={2}
          >{item.description}</Text>
          <Text>
            {`${I18n.t('EventItems.startTime')}: `}
            {moment(new Date(item.startTime)).format('MMMM Do YYYY, HH:mm')}
          </Text>
          <Text>
            {`${I18n.t('EventItems.endTime')}: `}
            {moment(new Date(item.endTime)).format('MMMM Do YYYY, HH:mm')}
          </Text>
        </View>
      </View>
    );
  }

  // eslint-disable-next-line
  renderSeparator() {
    return (
      <View style={styles.separator} />
    );
  }

  renderEventItems() {
    const { items } = this.props;

    return (
      <FlatList
        /* https://github.com/facebook/react-native/issues/13316 */
        removeClippedSubviews={false}
        data={items}
        keyExtractor={item => item.id}
        ItemSeparatorComponent={this.renderSeparator}
        // eslint-disable-next-line
        renderItem={this.renderEventItem.bind(this)}
      />
    );
  }

  render() {
    return this.renderEventItems();
  }
}

export default EventItems;
