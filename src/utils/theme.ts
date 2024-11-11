import { TextStyle } from 'react-native';
import { getFontSize } from './responsive';

export const colors = {
  background: '#FFFFFF',
  disabled: '#DBDBDB',
  green: '#00763E',
  grey: '#F5F5F5',
  placeholder: '#9095A1',
  text: '#0C2039',
  white: '#FFFFFF',
};

export const fontFamily = {
  regular: 'HelveticaNeue',
  bold: 'HelveticaNeue-Bold',
  light: 'HelveticaNeue-Light',
  medium: 'HelveticaNeue-Medium',
};

const textBase: TextStyle = {
  fontFamily: fontFamily.regular,
};

export const h1: TextStyle = {
  ...textBase,
  fontFamily: fontFamily.bold,
  fontSize: getFontSize(32),
};

export const h2: TextStyle = {
  ...textBase,
  fontFamily: fontFamily.bold,
  fontSize: getFontSize(24),
};

export const h3: TextStyle = {
  ...textBase,
  fontFamily: fontFamily.bold,
  fontSize: getFontSize(18.72),
};

export const h4: TextStyle = {
  ...textBase,
  fontFamily: fontFamily.bold,
  fontSize: getFontSize(16),
};

export const h5: TextStyle = {
  ...textBase,
  fontFamily: fontFamily.medium,
  fontSize: getFontSize(13.28),
};

export const paragraph: TextStyle = {
  ...textBase,
  fontSize: getFontSize(16),
};

export const paragraphLight: TextStyle = {
  ...paragraph,
  fontFamily: fontFamily.light,
};

export const paragraphMedium: TextStyle = {
  ...paragraph,
  fontFamily: fontFamily.medium,
};

export const paragraphBold: TextStyle = {
  ...paragraph,
  fontFamily: fontFamily.bold,
};

export const small: TextStyle = {
  ...textBase,
  fontSize: getFontSize(14),
};

export const smallLight: TextStyle = {
  ...small,
  fontFamily: fontFamily.light,
};

export const smallMedium: TextStyle = {
  ...small,
  fontFamily: fontFamily.medium,
};

export const smallBold: TextStyle = {
  ...small,
  fontFamily: fontFamily.bold,
};

export const xsmall: TextStyle = {
  ...textBase,
  fontSize: getFontSize(12),
};

export const xsmallLight: TextStyle = {
  ...xsmall,
  fontFamily: fontFamily.light,
};

export const xsmallMedium: TextStyle = {
  ...xsmall,
  fontFamily: fontFamily.medium,
};

export const xsmallBold: TextStyle = {
  ...xsmall,
  fontFamily: fontFamily.bold,
};
