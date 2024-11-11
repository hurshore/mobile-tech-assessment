import React from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';

import Text from './Text';
import { colors, fontFamily } from '../utils/theme';
import { getFontSize, getHeight } from '../utils/responsive';

interface Props {
  title: string;
}

const Button = ({ title }: Props) => {
  return (
    <TouchableOpacity style={styles.container}>
      <Text style={styles.buttonText}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  buttonText: {
    color: colors.white,
    fontFamily: fontFamily.bold,
    fontSize: getFontSize(15),
  },
  container: {
    alignItems: 'center',
    backgroundColor: colors.green,
    borderRadius: getHeight(8),
    marginBottom: getHeight(20),
    marginTop: getHeight(40),
    padding: getHeight(16),
  },
});

export default Button;
