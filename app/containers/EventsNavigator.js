import { StackNavigator } from 'react-navigation';
import Event from './screens/Event';
import Events from './screens/Events';
import EventParticipants from './screens/EventParticipants';

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
});

export default DashboardNavigator;
