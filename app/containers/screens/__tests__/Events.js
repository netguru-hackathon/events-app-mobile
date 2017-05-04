import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';
import Events from '../Events';

test('renders correctly', () => {
  const tree = renderer.create(
    <Events />,
  ).toJSON();
  expect(tree).toMatchSnapshot();
});
