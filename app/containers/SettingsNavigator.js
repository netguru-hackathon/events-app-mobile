import { StackNavigator } from 'react-navigation';
import Settings from './screens/Settings';

const SettingsStackNavigator = StackNavigator({
  Settings: {
    screen: Settings,
  },
});

export default SettingsStackNavigator;
