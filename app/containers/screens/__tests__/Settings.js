import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';
import Settings from '../Settings';
import store from '../../../store';

test('renders correctly', () => {
  const tree = renderer.create(
    <Settings
      user={{
        name: 'name',
        email: 'email',
        avatarUrl: 'avatarUrl',
      }}
      store={store}
    />,
  ).toJSON();
  expect(tree).toMatchSnapshot();
});
