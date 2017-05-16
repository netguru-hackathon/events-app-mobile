import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';
import Event from '../Event';
import store from '../../../store';

test('renders correctly', () => {
  const tree = renderer.create(
    <Event
      store={store}
      isStarted={'true'}
      isFetching={'true'}
      event={{
        name: 'name',
        description: 'description',
        image: 'image',
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
