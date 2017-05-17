import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';
import AccessTokenFetcher from '../AccessTokenFetcher';
import store from '../../../store';
import { authUser } from '../../../actions/auth';

test('renders correctly', () => {
  const tree = renderer.create(
    <AccessTokenFetcher
      store={store}
      authUser={authUser}
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
