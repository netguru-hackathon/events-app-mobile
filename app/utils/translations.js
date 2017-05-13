import I18n from 'react-native-i18n';

I18n.fallbacks = true;

I18n.translations = {
  en: {
    loading: 'Loading...',
    welcome: 'Welcome',
  },
  pl: {
    loading: 'Wczytywanie...',
    welcome: 'Witaj',
  },
};

export default I18n;
