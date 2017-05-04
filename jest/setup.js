jest.mock('react-native-fabric', () => ({
  Crashlytics: {
    crash: () => {},
  },
  Answers: {
    logCustom: () => {},
    logContentView: () => {},
  },
}));

// https://github.com/facebook/jest/issues/2208#issuecomment-265132583
// https://github.com/react-community/react-navigation/issues/256#issuecomment-284173395
jest.mock('Linking', () => ({
  addEventListener: jest.fn(),
  removeEventListener: jest.fn(),
  openURL: jest.fn(),
  canOpenURL: jest.fn(),
  getInitialURL: jest.fn(),
}));
