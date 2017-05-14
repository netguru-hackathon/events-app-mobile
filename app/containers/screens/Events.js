import React, { Component } from 'react';
import {
  Image,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import I18n from '../../utils/translations';

const styles = StyleSheet.create({
  icon: {
    width: 20,
    height: 20,
  },
});

class Events extends Component {
  static navigationOptions = {
    tabBarLabel: I18n.t('events'),
    showIcon: true,
    tabBarIcon: ({ tintColor }) => (
      <Image
        source={require('../../img/EventsIcon.png')}
        style={[styles.icon, { tintColor }]}
      />
    ),
  };

  render() {
    return (
      <View>
        <Text>{I18n.t('eventsTitle')}</Text>
      </View>
    );
  }
}

export default Events;
