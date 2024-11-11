import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import { getHeight, getWidth } from '../utils/responsive';
import { colors } from '../utils/theme';

interface Props {
  isChecked: boolean;
}

const checkboxOutline = '#C7C7C7';

const Checkbox = ({ isChecked }: Props) => {
  return (
    <View style={[styles.container, isChecked && styles.checkboxSelected]}>
      {isChecked && <Ionicons name="checkmark" size={16} color="#fff" />}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    borderColor: checkboxOutline,
    borderRadius: getHeight(2),
    borderWidth: getWidth(2),
    height: getWidth(18),
    justifyContent: 'center',
    width: getWidth(18),
  },
  checkboxSelected: {
    backgroundColor: colors.green,
    borderWidth: 0,
  },
});

export default Checkbox;
