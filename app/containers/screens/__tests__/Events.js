import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';
import Events from '../Events';
import store from '../../../store';

test('renders correctly', () => {
  const tree = renderer.create(
    <Events
      store={store}
      isStarted={'true'}
      isFetching={'true'}
      events={[]}
      navigation={{
        navigate: () => {},
        state: {
          params: {
            code: 'code',
          },
        },
      }}
    />,
  ).toJSON();
  expect(tree).toMatchSnapshot();
});
