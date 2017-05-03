## EventsApp mobile

Code quality [![codebeat badge](https://codebeat.co/badges/6229e7ee-d790-444c-8905-2a29c557d294)](https://codebeat.co/projects/github-com-netguru-hackathon-events-app-mobile-master)
[![Code Climate](https://codeclimate.com/github/netguru-hackathon/events-app-mobile/badges/gpa.svg)](https://codeclimate.com/github/netguru-hackathon/events-app-mobile)

Android [![Build Status](https://www.bitrise.io/app/ea788d371b493b45.svg?token=gQzdV-OK6RBcEElLAtRvSA)](https://www.bitrise.io/app/ea788d371b493b45)
iOS [![Build Status](https://www.bitrise.io/app/e41270c9ddb1fbf3.svg?token=kyL8B1JF1S-Dy_GDq6XHIQ)](https://www.bitrise.io/app/e41270c9ddb1fbf3)

### Technology stack
| Technology     | Version          |
|----------------|------------------|
| React          | 16.0.0-alpha.6   |
| React Native   | 0.43.3           |
| axios          | 0.16.1           |
| redux          | 3.6.0            |

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
or open ios/EventsApp.xcodeproj in Xcode, Hit the Run button

2. Android:
```
$ react-native run-android
```

### Running Tests
```bash
$ yarn test
```
