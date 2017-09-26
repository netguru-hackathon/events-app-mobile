import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components/native';
import {
  Dimensions,
  Image,
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

const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

const LoginButton = styled.Image`
  width: ${0.7 * width};
`;

const authURL = `${SlackOAuthUrl}?client_id=${Config.SLACK_CLIENT_ID}&scope=${permissionScopes()}`;

const Login = props =>
  <Container>
    <Text>{I18n.t('welcome')}</Text>
    <TouchableHighlight
      underlayColor={colors.TRANSPARENT}
      onPress={() => props.navigation.navigate('SlackAuth', { authURL })}
    >
      <LoginButton
        source={signInWithSlack}
        resizeMode={'contain'}
      />
    </TouchableHighlight>
  </Container>;

Login.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
  }).isRequired,
};

export default Login;
