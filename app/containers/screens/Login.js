import React from 'react';
import PropTypes from 'prop-types';
import {
  View,
  StyleSheet,
  TouchableHighlight,
  Text,
  Linking,
  Platform,
} from 'react-native';
import Config from 'react-native-config';
import colors from '../../constants/colors';
import { SlackOAuthUrl } from '../../constants/constants';
import permissionScopes from '../../utils/oauth';
import I18n from '../../utils/translations';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

const authURL = `${SlackOAuthUrl}?client_id=${Config.SLACK_CLIENT_ID}&scope=${permissionScopes()}`;

const Login = props =>
  <View
    style={styles.container}
  >
    <TouchableHighlight
      underlayColor={colors.TRANSPARENT}
      onPress={() => {
        if (Platform.OS === 'android') {
          Linking.openURL(authURL);
        } else {
          props.navigation.navigate('SlackAuth', { authURL });
        }
      }}
    >
      <Text>{I18n.t('welcome')}</Text>
    </TouchableHighlight>
  </View>;

Login.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
  }).isRequired,
};

export default Login;
