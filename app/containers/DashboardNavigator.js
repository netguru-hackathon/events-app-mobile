import { TabNavigator, TabBarBottom } from 'react-navigation';
import Events from './screens/Events';
import Settings from './screens/Settings';

const DashboardNavigator = TabNavigator({
  Events: {
    screen: Events,
  },
  Settings: {
    screen: Settings,
  },
}, {
  tabBarOptions: {
    activeTintColor: '#6D5EB3',
  },
  tabBarPosition: 'bottom',
  tabBarComponent: TabBarBottom,
  swipeEnabled: false,
});

export default DashboardNavigator;
