import { AppRegistry } from 'react-native';
import crashlytics from 'react-native-fabric-crashlytics';
import EventsApp from './app/app';

crashlytics.init();

AppRegistry.registerComponent('EventsApp', () => EventsApp);
