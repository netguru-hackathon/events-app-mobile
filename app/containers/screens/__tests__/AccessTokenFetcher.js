import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';
import AccessTokenFetcher from '../AccessTokenFetcher';
import store from '../../../store';

test('renders correctly', () => {
  const tree = renderer.create(
    <AccessTokenFetcher
      store={store}
      navigation={{
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
