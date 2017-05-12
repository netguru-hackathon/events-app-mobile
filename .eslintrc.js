module.exports = {
  parser: 'babel-eslint',
  extends: 'airbnb',
  plugins: [
    'react',
    'react-native',
    'jsx-a11y',
    'import'
  ],
  settings: {
    'import/resolver': 'reactnative',
  },
  env: {
    jest: true
  },
  rules: {
    'react/jsx-filename-extension': [2, { extensions: ['.js'] }],
    'react/require-default-props': 0,
    'react-native/no-unused-styles': 2,
    'react-native/split-platform-components': 2,
    'react-native/no-inline-styles': 2,
    'react-native/no-color-literals': 2,
    'import/prefer-default-export': 0,
    'no-unused-vars': [2, { 'argsIgnorePattern': '^_' }],
    'max-len': [2, 100],
    'global-require': 0,
    'no-multiple-empty-lines': ['error', {
      max: 1,
      maxEOF: 0,
      maxBOF: 0,
    }],
  },
  globals: {
    fetch: false,
  },
};
