import { TabNavigator, TabBarBottom } from 'react-navigation';
import Events from './screens/Events';
import Settings from './screens/Settings';
import colors from '../constants/colors';

const DashboardNavigator = TabNavigator({
  Events: {
    screen: Events,
  },
  Settings: {
    screen: Settings,
  },
}, {
  tabBarOptions: {
    activeTintColor: colors.NAVIGATION_ACTIVE_TINT_COLOR,
  },
  tabBarPosition: 'bottom',
  tabBarComponent: TabBarBottom,
  swipeEnabled: false,
});

export default DashboardNavigator;
