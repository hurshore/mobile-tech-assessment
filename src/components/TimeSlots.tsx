import React, { useState } from 'react';
import { StyleSheet, TouchableOpacity, View } from 'react-native';
import { SvgProps } from 'react-native-svg';

import Checkbox from './Checkbox';
import RadioButton from './RadioButton';
import Text from './Text';
import {
  smallBold,
  smallMedium,
  xsmallBold,
  xsmallMedium,
} from '../utils/theme';
import { colors } from '../utils/theme';
import { getHeight, getWidth } from '../utils/responsive';
// images
import AfternoonIcon from '../../assets/icons/afternoon.svg';
import AllDayIcon from '../../assets/icons/24hours.svg';
import EveningIcon from '../../assets/icons/evening.svg';
import MorningIcon from '../../assets/icons/morning.svg';

export enum Slot {
  Morning = 'Morning',
  Afternoon = 'Afternoon',
  Evening = 'Evening',
  AllDay = 'All Day',
}

interface TimeSlot {
  period: string;
  slot: Slot;
  Icon: React.ComponentType<SvgProps>;
}

interface Props {
  selectedTime?: Slot;
  setSelectedTime: (time: Slot) => void;
}

const heading = 'I need a certain time of day';
const iconContainerSize = getWidth(40);

const slots: TimeSlot[] = [
  {
    period: '7:00am to 11:59am',
    slot: Slot.Morning,
    Icon: MorningIcon,
  },
  {
    period: '12:00pm to 4:59pm',
    slot: Slot.Afternoon,
    Icon: AfternoonIcon,
  },
  {
    period: '5:00pm to 9:59pm',
    slot: Slot.Evening,
    Icon: EveningIcon,
  },
  {
    period: '7:00am to 9:59pm',
    slot: Slot.AllDay,
    Icon: AllDayIcon,
  },
];

const TimeSlots = ({ selectedTime, setSelectedTime }: Props) => {
  const [isFixedTime, setIsFixedTime] = useState(false);

  const handlePress = (slot: Slot) => {
    setSelectedTime(slot);
  };

  const toggleFixedTime = () => {
    setIsFixedTime((isFixedTime) => !isFixedTime);
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={toggleFixedTime} style={styles.header}>
        <Checkbox isChecked={isFixedTime} />
        <Text style={styles.heading}>{heading}</Text>
      </TouchableOpacity>
      {isFixedTime && (
        <View style={styles.timeSlots}>
          {slots.map(({ slot, period, Icon }) => {
            const selected = slot === selectedTime;
            const textSelectedStyle = selected
              ? styles.timeSlotSelectedText
              : {};
            return (
              <TouchableOpacity
                style={[styles.timeSlot, selected && styles.timeSlotSelected]}
                onPress={() => handlePress(slot)}
                key={slot}
              >
                <View style={styles.iconContainer}>
                  <Icon />
                </View>
                <View style={styles.timeSlotMain}>
                  <View style={styles.timeSlotText}>
                    <Text style={[styles.timeSlotTitle, textSelectedStyle]}>
                      {slot}
                    </Text>
                    <Text style={[styles.timeSlotRange, textSelectedStyle]}>
                      The time range is{' '}
                      <Text style={[styles.timeSlotPeriod, textSelectedStyle]}>
                        {period}
                      </Text>
                    </Text>
                  </View>
                  <RadioButton isSelected={selected} />
                </View>
              </TouchableOpacity>
            );
          })}
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: getHeight(24),
    marginTop: getHeight(20),
  },
  header: {
    flexDirection: 'row',
    gap: getWidth(4),
  },
  heading: {
    ...smallMedium,
  },
  iconContainer: {
    alignItems: 'center',
    backgroundColor: colors.white,
    borderRadius: iconContainerSize / 2,
    height: iconContainerSize,
    justifyContent: 'center',
    marginBottom: getHeight(12),
    width: iconContainerSize,
  },
  timeSlot: {
    backgroundColor: colors.grey,
    borderRadius: getHeight(8),
    paddingHorizontal: getWidth(10),
    paddingVertical: getHeight(14),
  },
  timeSlotMain: {
    alignItems: 'center',
    flexDirection: 'row',
  },
  timeSlotPeriod: {
    ...xsmallBold,
  },
  timeSlotRange: {
    ...xsmallMedium,
  },
  timeSlots: {
    gap: getHeight(10),
    marginTop: getHeight(20),
  },
  timeSlotSelected: {
    backgroundColor: colors.green,
  },
  timeSlotSelectedText: {
    color: colors.white,
  },
  timeSlotText: {
    flex: 1,
  },
  timeSlotTitle: {
    ...smallBold,
    marginBottom: getHeight(4),
  },
});

export default TimeSlots;
