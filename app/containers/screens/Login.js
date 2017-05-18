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
import Config from 'react-native-config';
import colors from '../../constants/colors';
import { SlackOAuthUrl } from '../../constants/constants';
import permissionScopes from '../../utils/oauth';
import signInWithSlack from '../../img/SignInWithSlack.png';
import I18n from '../../utils/translations';

const { width } = Dimensions.get('window');
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    width: 0.7 * width,
  },
});

const authURL = `${SlackOAuthUrl}?client_id=${Config.SLACK_CLIENT_ID}&scope=${permissionScopes()}`;

const Login = props =>
  <View
    style={styles.container}
  >
    <Text>{I18n.t('welcome')}</Text>
    <TouchableHighlight
      underlayColor={colors.TRANSPARENT}
      onPress={() => props.navigation.navigate('SlackAuth', { authURL })}
    >
      <Image
        source={signInWithSlack}
        style={styles.button}
        resizeMode={'contain'}
      />
    </TouchableHighlight>
  </View>;

Login.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
  }).isRequired,
};

export default Login;
