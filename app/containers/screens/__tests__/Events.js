import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';
import Events from '../Events';
import store from '../../../store';

test('renders correctly', () => {
  const tree = renderer.create(
    <Events
      store={store}
    />,
  ).toJSON();
  expect(tree).toMatchSnapshot();
});
