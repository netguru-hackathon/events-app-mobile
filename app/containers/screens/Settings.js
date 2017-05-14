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

class Settings extends Component {
  static navigationOptions = {
    tabBarLabel: 'Settings',
    showIcon: true,
    tabBarIcon: ({ tintColor }) => (
      <Image
        source={require('../../img/SettingsIcon.png')}
        style={[styles.icon, { tintColor }]}
      />
    ),
  };

  render() {
    return (
      <View>
        <Text>Some Settings text</Text>
      </View>
    );
  }
}

export default Settings;
