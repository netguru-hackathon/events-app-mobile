jest.mock('react-native-fabric', () => ({
  Crashlytics: {
    crash: () => {},
  },
  Answers: {
    logCustom: () => {},
    logContentView: () => {},
  },
}));
