import React, { Component } from 'react';
import {
  Image,
  StyleSheet,
  Text,
  View,
} from 'react-native';

const styles = StyleSheet.create({
  icon: {
    width: 20,
    height: 20,
  },
});

class Events extends Component {
  static navigationOptions = {
    tabBarLabel: 'Events',
    // Note: By default the icon is only shown on iOS. Search the showIcon option below.
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
        <Text>Some Events text</Text>
      </View>
    );
  }
}

export default Events;
