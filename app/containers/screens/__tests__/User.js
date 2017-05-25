import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';
import User from '../User';
import store from '../../../store';

test('renders correctly', () => {
  const tree = renderer.create(
    <User
      store={store}
      isStarted={'true'}
      isFetching={'true'}
      event={{
        avatarUrl: 'avatarUrl',
        email: 'email',
        name: 'name',
      }}
      navigation={{
        navigate: () => {},
        state: {
          params: {
            item: {
              id: 1,
              name: 'name',
            },
          },
        },
      }}
    />,
  ).toJSON();
  expect(tree).toMatchSnapshot();
});
