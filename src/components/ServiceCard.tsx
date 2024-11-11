import { StyleSheet, TouchableOpacity } from 'react-native';

import RadioButton from './RadioButton';
import Text from '../components/Text';
import { getHeight, getWidth } from '../utils/responsive';
import { smallBold, xsmall } from '../utils/theme';
import { colors } from '../utils/theme';

export enum ServiceType {
  Residential = 'residential',
  Onsite = 'onsite',
}

interface ServiceCardProps {
  title: string;
  description: string;
  type: ServiceType;
  selected?: ServiceType;
  onPress: (type: ServiceType) => void;
}

const ServiceCard = ({
  title,
  description,
  type,
  selected,
  onPress,
}: ServiceCardProps) => (
  <TouchableOpacity
    onPress={() => onPress(type)}
    style={[
      styles.serviceCard,
      selected === type && { backgroundColor: colors.green },
    ]}
  >
    <RadioButton isSelected={selected === type} style={styles.radioButton} />
    <Text
      style={[styles.cardTitle, selected === type ? styles.selectedText : {}]}
    >
      {title}
    </Text>
    <Text
      style={[
        styles.cardDescription,
        selected === type ? styles.selectedText : {},
      ]}
    >
      {description}
    </Text>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  cardDescription: {
    ...xsmall,
    lineHeight: getHeight(16.39),
  },
  cardTitle: {
    ...smallBold,
    marginBottom: getHeight(10),
  },
  radioButton: {
    marginBottom: getHeight(15),
  },
  selectedText: {
    color: colors.white,
  },
  serviceCard: {
    flex: 1,
    backgroundColor: colors.grey,
    borderRadius: getHeight(8),
    paddingHorizontal: getWidth(10),
    paddingVertical: getHeight(14),
  },
});

export default ServiceCard;
