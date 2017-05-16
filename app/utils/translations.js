import I18n from 'react-native-i18n';

I18n.fallbacks = true;

I18n.translations = {
  en: {
    event: 'Event',
    events: 'Events',
    eventsTitle: 'Events',
    loading: 'Loading...',
    settings: 'Settings',
    settingsTitle: 'Settings',
    welcome: 'Welcome',
  },
  pl: {
    event: 'Wydarzenie',
    events: 'Wydarzenia',
    eventsTitle: 'Wydarzenia',
    loading: 'Wczytywanie...',
    settings: 'Ustawienia',
    settingsTitle: 'Ustawienia',
    welcome: 'Witaj',
  },
};

export default I18n;
