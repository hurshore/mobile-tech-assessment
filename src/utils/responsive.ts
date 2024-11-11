import { Dimensions } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';

export const screenWidth = Math.round(Dimensions.get('window').width);
export const screenHeight = Math.round(Dimensions.get('window').height);

const getComputed = (value: number, type: string) => {
  const dpiBuffer = screenWidth < 360 ? 1.08 : 1;

  if (type === 'w') {
    const dpi = 0.267 * dpiBuffer;
    return wp(`${value * dpi}%`);
  }

  if (type === 'h') {
    const dpi = 0.123 * dpiBuffer;
    return hp(`${value * dpi}%`);
  }

  return value;
};

export const getWidth = (value: number) => getComputed(value, 'w');
export const getHeight = (value: number) => getComputed(value, 'h');

export const getFontSize = (size: number) => {
  const referenceWidth = 360; // the reference width used by react-native-responsive-fontsize
  const designWidth = 390; // the width of the device in the figma designs
  const newSize = size * (referenceWidth / designWidth);
  return RFValue(newSize);
};
