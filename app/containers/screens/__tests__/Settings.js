import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';
import Settings from '../Settings';
import store from '../../../store';

test('renders correctly', () => {
  const tree = renderer.create(
    <Settings
      store={store}
      token={'token'}
    />,
  ).toJSON();
  expect(tree).toMatchSnapshot();
});
