import { Dimensions } from 'react-native';

const { width } = Dimensions.get('window');

const isSmallScreen = () =>
  width <= 320;

const isNormalScreen = () =>
  width > 320 && width < 410;

const isBigScreen = () =>
  width >= 410;

const normalizedFontSize = (basicFontSize) => {
  if (isSmallScreen()) {
    return basicFontSize - 1;
  } else if (isNormalScreen()) {
    return basicFontSize;
  } else if (isBigScreen()) {
    return basicFontSize + 1;
  }
  return basicFontSize;
};

export { normalizedFontSize };
