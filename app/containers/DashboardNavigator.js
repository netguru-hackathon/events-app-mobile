import { TabNavigator, TabBarBottom } from 'react-navigation';
import EventsStackNavigator from './EventsNavigator';
import SettingsStackNavigator from './SettingsNavigator';
import colors from '../constants/colors';

const DashboardNavigator = TabNavigator({
  EventsStackNavigator: {
    screen: EventsStackNavigator,
  },
  SettingsStackNavigator: {
    screen: SettingsStackNavigator,
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
