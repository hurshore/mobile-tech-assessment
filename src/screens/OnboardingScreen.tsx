import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

import Button from '../components/Button';
import Screen from '../components/Screen';
import ServiceCards from '../components/ServiceCards';
import ServiceDate, { DateType } from '../components/ServiceDate';
import ServiceLocation, { Location } from '../components/ServiceLocation';
import Text from '../components/Text';
import TimeSlots, { Slot } from '../components/TimeSlots';
import { h2, small } from '../utils/theme';
import { getHeight } from '../utils/responsive';
import { isLocationComplete } from '../utils/form';
import { ServiceType } from '../components/ServiceCard';

const title = 'Location & Date';
const subtitle = 'Select the category that best fits your needs.';
const buttonTitle = 'Continue';

export default function OnboardingScreen() {
  const [serviceType, setServiceType] = useState<ServiceType>();
  const [location, setLocation] = useState<Location>();
  const [dateType, setDateType] = useState<DateType>();
  const [selectedDate, setSelectedDate] = useState<Date>();
  const [selectedTime, setSelectedTime] = useState<Slot>();
  const isLocationDefined = isLocationComplete(location);
  const isResidential = serviceType === ServiceType.Residential;
  const isFixedDate = dateType === DateType.Fixed;
  const showServiceDate = (serviceType && !isResidential) || isLocationDefined;
  const showTimeSlots =
    (isFixedDate && selectedDate) ||
    (dateType && !isFixedDate && showServiceDate);

  return (
    <Screen>
      <KeyboardAwareScrollView
        contentContainerStyle={styles.scrollView}
        showsVerticalScrollIndicator={false}
      >
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.subtitle}>{subtitle}</Text>

        <ServiceCards
          serviceType={serviceType}
          setServiceType={setServiceType}
        />

        {serviceType && isResidential && (
          <ServiceLocation location={location} setLocation={setLocation} />
        )}

        {showServiceDate && (
          <ServiceDate
            dateType={dateType}
            setDateType={setDateType}
            selectedDate={selectedDate}
            setSelectedDate={setSelectedDate}
          />
        )}

        {showTimeSlots && (
          <TimeSlots
            selectedTime={selectedTime}
            setSelectedTime={setSelectedTime}
          />
        )}

        <View style={styles.buttonContainer}>
          <Button title={buttonTitle} />
        </View>
      </KeyboardAwareScrollView>
    </Screen>
  );
}

const styles = StyleSheet.create({
  buttonContainer: {
    marginTop: 'auto',
  },
  scrollView: {
    flexGrow: 1,
    paddingTop: getHeight(56),
  },
  subtitle: {
    ...small,
    marginBottom: getHeight(40),
  },
  title: {
    ...h2,
    marginBottom: getHeight(9),
  },
});
