import {Dimensions, NativeModules} from 'react-native';
const {width, height} = Dimensions.get('screen');

export const Colors = {
  minColor: '#ED6A1D',
  colorSacand: '#F8B61C',
  gray: '#979797',
  appBackgroundColor: '#fff',
  sacandAppBackgroundColor: '#F4F6F9',
  grayDark: '#515355',
  boxColor: '#E0E6EF',
  success: '#21BF46',
  warning: '#FF5656',
  white: '#ffffff',
  dark: '#111113',
  edit: '#337ab7',
};

export const Fonts = {
  light: 'Roboto-Light',
  regular: 'Roboto-Regular',
  medium: 'Roboto-Medium',
  bold: 'Roboto-Bold',
  extraBold: 'Roboto-ExtraBold',
  black: 'Roboto-Black',
};

export const ScreenOptions = {
  StatusBarHeight: NativeModules.StatusBarManager.HEIGHT,
  HalfScreen: width / 2 - 15,
  CURRENT_RESOLUTION: Math.sqrt(height * height + width * width),
  DesignResolution: {
    width: 750,
    height: 1624,
  },
};

/**
 * create PerfectPixel fnction from Design Resolution
 * @param designSize uor Design Resolution
 * @returns function use in PixelPerfect
 */
export const createPerfectPixel = (designSize = {width: 750, height: 1624}) => {
  if (
    !designSize ||
    !designSize.width ||
    !designSize.height ||
    typeof designSize.width !== 'number' ||
    typeof designSize.height !== 'number'
  ) {
    throw new Error(
      'Invalid design size object! must have width and height fields of type Number.',
    );
  }
  const DESIGN_RESOLUTION = Math.sqrt(
    designSize.height * designSize.height + designSize.width * designSize.width,
  );
  const RESOLUTIONS_PROPORTION =
    ScreenOptions.CURRENT_RESOLUTION / DESIGN_RESOLUTION;
  return size => RESOLUTIONS_PROPORTION * size;
};

/**
 * Get perfect pixel for current resolution
 * @param pixel design size numbers
 * @returns Perfect pixel for current resolution
 */
export const PixelPerfect = pixel => {
  const Perfect = createPerfectPixel(ScreenOptions.DesignResolution);
  return Perfect(pixel);
};
