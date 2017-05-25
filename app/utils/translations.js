import I18n from 'react-native-i18n';

I18n.fallbacks = true;

I18n.translations = {
  en: {
    event: 'Event',
    events: 'Events',
    eventsTitle: 'Events',
    loading: 'Loading...',
    logout: 'Logout',
    settings: 'Settings',
    settingsTitle: 'Settings',
    welcome: 'Welcome',
    Event: {
      participants: 'Participants',
    },
    EventItems: {
      endTime: 'Starts at',
      startTime: 'Ends at',
    },
    EventParticipants: {
      participants: 'Participants',
    },
  },
  pl: {
    event: 'Wydarzenie',
    events: 'Wydarzenia',
    eventsTitle: 'Wydarzenia',
    loading: 'Wczytywanie...',
    logout: 'Wyloguj',
    settings: 'Ustawienia',
    settingsTitle: 'Ustawienia',
    welcome: 'Witaj',
    Event: {
      participants: 'Uczestnicy',
    },
    EventItems: {
      endTime: 'Zakończenie',
      startTime: 'Rozpoczęcie',
    },
    EventParticipants: {
      participants: 'Uczestnicy',
    },
  },
};

export default I18n;
