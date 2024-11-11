import React from 'react';
import { StyleSheet, Text, TextStyle } from 'react-native';

import { colors, fontFamily } from '../utils/theme';
import { getFontSize } from '../utils/responsive';

interface Props {
  children: React.ReactNode;
  style?: TextStyle | TextStyle[];
}

const AppText = ({ children, style }: Props) => {
  return <Text style={[styles.text, style]}>{children}</Text>;
};

const styles = StyleSheet.create({
  text: {
    color: colors.text,
    fontFamily: fontFamily.regular,
    fontSize: getFontSize(16),
  },
});

export default AppText;
