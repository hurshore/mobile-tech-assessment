import React from 'react';
import { StyleSheet, View } from 'react-native';

import ServiceCard, { ServiceType } from './ServiceCard';
import { getHeight, getWidth } from '../utils/responsive';

interface Props {
  serviceType?: ServiceType;
  setServiceType: (type: ServiceType) => void;
}

const services = [
  {
    title: 'Residential Service',
    description:
      'Select this if you need the task done at a particular location of your choice',
    type: ServiceType.Residential,
  },
  {
    title: 'On-Site Service',
    description:
      'Select this if you are more happy to go to the registered business address',
    type: ServiceType.Onsite,
  },
];

const ServiceCards = ({ serviceType, setServiceType }: Props) => {
  return (
    <View style={styles.container}>
      {services.map((service) => (
        <ServiceCard
          key={service.type}
          {...service}
          selected={serviceType}
          onPress={setServiceType}
        />
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    gap: getWidth(10),
    marginBottom: getHeight(20),
  },
});

export default ServiceCards;
