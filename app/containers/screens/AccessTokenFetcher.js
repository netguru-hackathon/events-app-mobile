import React from 'react';
import PropTypes from 'prop-types';
import {
  View,
  StyleSheet,
  Text,
} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

const FetchAccessToken = (props) => {
  const { params } = props.navigation.state;

  return (
    <View
      style={styles.container}
    >
      <Text>
        FetchAccessToken with code {params.code}
      </Text>
    </View>
  );
};

FetchAccessToken.propTypes = {
  navigation: PropTypes.shape({
    state: PropTypes.object.isRequired,
  }).isRequired,
};

export default FetchAccessToken;
