import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';
import Settings from '../Settings';

test('renders correctly', () => {
  const tree = renderer.create(
    <Settings />,
  ).toJSON();
  expect(tree).toMatchSnapshot();
});
