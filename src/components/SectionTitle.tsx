import React from 'react';
import { StyleSheet } from 'react-native';

import Text from './Text';
import { paragraphMedium } from '../utils/theme';
import { getHeight } from '../utils/responsive';

interface Props {
  title: string;
}

const SectionTitle = ({ title }: Props) => (
  <Text style={styles.title}>{title}</Text>
);

const styles = StyleSheet.create({
  title: {
    ...paragraphMedium,
    marginBottom: getHeight(8),
  },
});

export default SectionTitle;
