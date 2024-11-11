import React from 'react';
import { SafeAreaView, StyleSheet, View } from 'react-native';
import Constants from 'expo-constants';

import { colors } from '../utils/theme';
import { SCREEN_PADDING } from '../utils/constants';

interface Props {
  children: React.ReactNode;
}

const Screen = ({ children }: Props) => (
  <SafeAreaView style={styles.container}>
    <View style={styles.view}>{children}</View>
  </SafeAreaView>
);

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.background,
    flex: 1,
    paddingTop: Constants.statusBarHeight,
  },
  view: {
    flex: 1,
    paddingHorizontal: SCREEN_PADDING,
  },
});

export default Screen;
