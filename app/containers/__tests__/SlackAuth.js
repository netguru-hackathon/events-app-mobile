import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';
import SlackAuth from '../SlackAuth';

// https://github.com/facebook/react-native/issues/12440
jest.unmock('ScrollView');

test('renders correctly', () => {
  const tree = renderer.create(
    <SlackAuth
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
