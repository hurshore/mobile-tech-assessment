import React, { useState } from 'react';
import {
  Modal,
  Platform,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';
import DateTimePicker, {
  DateTimePickerAndroid,
  DateTimePickerEvent,
} from '@react-native-community/datetimepicker';
import dayjs from 'dayjs';

import Checkbox from './Checkbox';
import SectionTitle from './SectionTitle';
import Text from './Text';
import { colors } from '../utils/theme';
import { PLATFORM } from '../utils/constants';
import { getHeight, getWidth } from '../utils/responsive';
import { paragraphMedium, smallMedium } from '../utils/theme';
// images
import CalendarIcon from '../../assets/icons/calendar.svg';

export enum DateType {
  Fixed = 'fixed',
  Flexible = 'flexible',
}

interface Props {
  dateType?: DateType;
  selectedDate?: Date;
  setDateType: (dateType: DateType) => void;
  setSelectedDate: (date: Date) => void;
}

const title = 'When do you need this done?';
const flexibleText = 'I’m flexible';
const fixedText = 'On date';
const calendarIconSize = getWidth(24);
const datePlaceholder = 'Select date';

const ServiceDate = ({
  dateType,
  selectedDate,
  setDateType,
  setSelectedDate,
}: Props) => {
  const [isDatePickerOpen, setIsDatePickerOpen] = useState(false);
  const isFixed = dateType === DateType.Fixed;
  const isFlexible = dateType === DateType.Flexible;
  const formattedDate = selectedDate
    ? dayjs(selectedDate).format('DD - MM - YYYY')
    : '';

  const onDateChange = (event: DateTimePickerEvent, date?: Date) => {
    if (event.type === 'set' && date) {
      setSelectedDate(date);
    }
  };

  const showDatePicker = () => {
    if (Platform.OS === PLATFORM.android) {
      DateTimePickerAndroid.open({
        value: selectedDate || new Date(),
        onChange: onDateChange,
        mode: 'date',
        minimumDate: new Date(),
      });
    } else {
      setIsDatePickerOpen(true);
    }
  };

  const closeDatePicker = () => setIsDatePickerOpen(false);

  return (
    <View style={styles.container}>
      <SectionTitle title={title} />

      <View style={styles.dateTypeContainer}>
        <TouchableOpacity
          style={styles.dateType}
          onPress={() => setDateType(DateType.Fixed)}
        >
          <Checkbox isChecked={isFixed} />
          <Text style={styles.text}>{fixedText}</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.dateType}
          onPress={() => setDateType(DateType.Flexible)}
        >
          <Checkbox isChecked={isFlexible} />
          <Text style={styles.text}>{flexibleText}</Text>
        </TouchableOpacity>
      </View>

      {isFixed && (
        <>
          <TouchableOpacity
            style={styles.dateContainer}
            onPress={showDatePicker}
          >
            <Text
              style={[
                styles.dateText,
                !selectedDate ? styles.datePlaceholder : {},
              ]}
            >
              {formattedDate || datePlaceholder}
            </Text>
            <CalendarIcon width={calendarIconSize} height={calendarIconSize} />
          </TouchableOpacity>
          {Platform.OS === 'ios' && (
            <Modal
              transparent={true}
              animationType="slide"
              visible={isDatePickerOpen}
              onRequestClose={closeDatePicker}
            >
              <View style={styles.modalContainer}>
                <View style={styles.modalContent}>
                  <DateTimePicker
                    value={selectedDate || new Date()}
                    onChange={onDateChange}
                    minimumDate={new Date()}
                    mode="date"
                    display="spinner"
                  />
                  <TouchableOpacity
                    onPress={closeDatePicker}
                    style={styles.doneButton}
                  >
                    <Text style={styles.doneButtonText}>Done</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </Modal>
          )}
        </>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: getHeight(12),
  },
  dateContainer: {
    alignItems: 'center',
    backgroundColor: colors.grey,
    borderRadius: getHeight(8),
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: getHeight(20),
    paddingHorizontal: getWidth(16),
    paddingVertical: getHeight(14),
  },
  datePlaceholder: {
    color: colors.placeholder,
  },
  dateText: {
    ...smallMedium,
  },
  dateType: {
    alignItems: 'center',
    backgroundColor: colors.grey,
    borderRadius: getHeight(4),
    flexDirection: 'row',
    gap: getWidth(9),
    minWidth: getWidth(132),
    paddingHorizontal: getWidth(13),
    paddingVertical: getHeight(7),
  },
  dateTypeContainer: {
    flexDirection: 'row',
    gap: getWidth(13),
  },
  doneButton: {
    alignItems: 'center',
    paddingVertical: getHeight(10),
  },
  doneButtonText: {
    color: colors.green,
    ...paragraphMedium,
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'flex-end',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    backgroundColor: 'white',
    paddingBottom: getHeight(20),
  },
  text: {
    ...paragraphMedium,
  },
});

export default ServiceDate;
