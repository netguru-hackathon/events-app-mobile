import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';
import EventParticipants from '../EventParticipants';
import store from '../../../store';

test('renders correctly', () => {
  const tree = renderer.create(
    <EventParticipants
      store={store}
      eventParticipants={[]}
    />,
  ).toJSON();
  expect(tree).toMatchSnapshot();
});
