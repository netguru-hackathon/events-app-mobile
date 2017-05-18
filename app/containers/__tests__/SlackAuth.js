import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';
import SlackAuth from '../SlackAuth';
import store from '../../store';

// https://github.com/facebook/react-native/issues/12440
jest.unmock('ScrollView');

test('renders correctly', () => {
  const tree = renderer.create(
    <SlackAuth
      store={store}
      navigation={{
        navigate: () => {},
        state: {
          params: {
            authURL: 'http://google.com',
          },
        },
      }}
    />,
  ).toJSON();
  expect(tree).toMatchSnapshot();
});
