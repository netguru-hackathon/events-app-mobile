import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';
import { RenderActivityIndicator } from '../RenderActivityIndicator';

test('renders correctly', () => {
  const tree = renderer.create(
    <RenderActivityIndicator />,
  ).toJSON();
  expect(tree).toMatchSnapshot();
});
