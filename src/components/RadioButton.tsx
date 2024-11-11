import React from 'react';
import { StyleSheet, View, ViewStyle } from 'react-native';

import { colors } from '../utils/theme';
import { getWidth } from '../utils/responsive';

interface Props {
  isSelected: boolean;
  style?: ViewStyle;
}

const radioButtonSize = getWidth(20);
const radioButtonInnerSize = getWidth(12);

const RadioButton = ({ isSelected, style }: Props) => {
  return (
    <View
      style={[
        styles.container,
        isSelected && styles.radioButtonSelected,
        style,
      ]}
    >
      {isSelected && <View style={styles.radioButtonInner} />}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    borderColor: colors.disabled,
    borderRadius: radioButtonSize / 2,
    borderWidth: getWidth(2),
    height: radioButtonSize,
    justifyContent: 'center',
    width: radioButtonSize,
  },
  radioButtonInner: {
    width: radioButtonInnerSize,
    height: radioButtonInnerSize,
    borderRadius: radioButtonInnerSize / 2,
    backgroundColor: colors.white,
  },
  radioButtonSelected: {
    borderColor: colors.white,
    borderWidth: getWidth(1),
  },
});

export default RadioButton;
