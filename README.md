## EventsApp mobile

### Technology stack
* React 16.0.0-alpha.6
* React Native 0.43.3

### Prerequisites
* [React Native](https://facebook.github.io/react-native/docs/getting-started.html)
* [Yarn](https://yarnpkg.com/en/docs/install)
* [Pods](https://cocoapods.org/)

### Installation
1. Clone the repo:
```bash
$ git clone git@github.com:netguru-hackathon/events-app-mobile.git
$ cd events-app-mobile
```

2. Install dependencies:
```bash
$ yarn
```

3. Install pods
```bash
$ cd ios && pod install
```

4. Copy sample environment file:
```bash
$ cp .env.sample .env
```

### Running/Development
1. iOS:
```bash
$ react-native run-ios
```
2. Android:
```
$ react-native run-android
```
or open ios/EventsApp.xcodeproj in Xcode, Hit the Run button

### Running Tests
```bash
$ yarn test
```
