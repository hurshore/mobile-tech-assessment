import React from 'react';
import { View } from 'react-native';

import TextInput from './TextInput';
import Dropdown from './Dropdown';
import SectionTitle from './SectionTitle';
import localGovernments from '../utils/localGovernments';

const title = 'Where do you want the task done?';
const dropdownPlaceholder = 'Local government';

enum Fields {
  localGovernment = 'localGovernment',
  houseAddress = 'houseAddress',
  busStop = 'busStop',
  landmarks = 'landmarks',
}

enum Placeholders {
  houseAddress = 'House address',
  busStop = 'Closest bus stop',
  landmarks = 'Landmarks',
}

export interface Location {
  localGovernment: string;
  houseAddress: string;
  busStop: string;
  landmarks: string;
}

interface Props {
  location?: Location;
  setLocation: (location: Location) => void;
}

const ServiceLocation = ({ location, setLocation }: Props) => {
  const setValue = (key: string, value: string) => {
    const currentLocation: Location = location || {
      localGovernment: '',
      houseAddress: '',
      busStop: '',
      landmarks: '',
    };
    setLocation({ ...currentLocation, [key]: value });
  };

  const setLocalGovernment = (lga: string) => {
    setValue(Fields.localGovernment, lga);
  };

  return (
    <View>
      <SectionTitle title={title} />
      <Dropdown
        data={localGovernments}
        placeholder={dropdownPlaceholder}
        setSelectedItem={setLocalGovernment}
      />
      {location?.localGovernment && (
        <TextInput
          value={location.houseAddress}
          placeholder={Placeholders.houseAddress}
          onChangeText={(value) => setValue(Fields.houseAddress, value)}
        />
      )}

      {location?.houseAddress && (
        <TextInput
          value={location.busStop}
          placeholder={Placeholders.busStop}
          onChangeText={(value) => setValue(Fields.busStop, value)}
        />
      )}

      {location?.busStop && (
        <TextInput
          value={location.landmarks}
          placeholder={Placeholders.landmarks}
          onChangeText={(value) => setValue(Fields.landmarks, value)}
        />
      )}
    </View>
  );
};
export default ServiceLocation;
