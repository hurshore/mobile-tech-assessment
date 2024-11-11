import React from 'react';
import { StyleSheet, TextInput, TextInputProps, View } from 'react-native';

import { colors, smallMedium } from '../utils/theme';
import { getHeight, getWidth } from '../utils/responsive';

const AppTextInput = ({ style, ...otherProps }: TextInputProps) => {
  return (
    <View style={styles.container}>
      <TextInput
        style={[styles.input, style]}
        placeholderTextColor={colors.placeholder}
        {...otherProps}
      ></TextInput>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.grey,
    borderRadius: getHeight(8),
    marginBottom: getHeight(8),
  },
  input: {
    ...smallMedium,
    color: colors.text,
    paddingHorizontal: getWidth(16),
    paddingVertical: getHeight(14),
  },
});

export default AppTextInput;
