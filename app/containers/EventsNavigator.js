import { StackNavigator } from 'react-navigation';
import Event from './screens/Event';
import Events from './screens/Events';

const DashboardNavigator = StackNavigator({
  Events: {
    screen: Events,
  },
  Event: {
    screen: Event,
  },
});

export default DashboardNavigator;
