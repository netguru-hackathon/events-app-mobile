import React from 'react';
import {
  View,
  StyleSheet,
  TouchableHighlight,
  Text,
  Linking,
} from 'react-native';
import Config from 'react-native-config';
import colors from '../../constants/colors';
import { SlackOAuthUrl } from '../../constants/constants';
import permissionScopes from '../../utils/oauth';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

const authURL = `${SlackOAuthUrl}?client_id=${Config.SLACK_CLIENT_ID}&scope=${permissionScopes()}`;

const Login = () =>
  <View
    style={styles.container}
  >
    <TouchableHighlight
      underlayColor={colors.TRANSPARENT}
      onPress={() => Linking.openURL(authURL)}
    >
      <Text>Add to Slack</Text>
    </TouchableHighlight>
  </View>;

export default Login;
