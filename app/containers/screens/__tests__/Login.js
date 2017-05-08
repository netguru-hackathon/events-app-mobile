import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';
import Login from '../Login';

test('renders correctly', () => {
  const tree = renderer.create(
    <Login />,
  ).toJSON();
  expect(tree).toMatchSnapshot();
});
