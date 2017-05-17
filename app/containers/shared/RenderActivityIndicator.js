import React from 'react';
import {
  ActivityIndicator,
  StyleSheet,
} from 'react-native';

const styles = StyleSheet.create({
  indicator: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 8,
    height: 80,
  },
});

export const RenderActivityIndicator = () => (
  <ActivityIndicator
    style={styles.indicator}
    size="large"
  />
);

export default RenderActivityIndicator;
