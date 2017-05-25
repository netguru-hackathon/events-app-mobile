import { StackNavigator } from 'react-navigation';
import Event from './screens/Event';
import Events from './screens/Events';
import EventParticipants from './screens/EventParticipants';
import User from './screens/User';

const DashboardNavigator = StackNavigator({
  Events: {
    screen: Events,
  },
  Event: {
    screen: Event,
  },
  EventParticipants: {
    screen: EventParticipants,
  },
  User: {
    screen: User,
  },
});

export default DashboardNavigator;
