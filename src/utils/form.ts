import { Location } from '../components/ServiceLocation';

export const isLocationComplete = (location?: Location): boolean => {
  if (!location) return false;

  return (
    typeof location.localGovernment === 'string' &&
    location.localGovernment.trim() !== '' &&
    typeof location.houseAddress === 'string' &&
    location.houseAddress.trim() !== '' &&
    typeof location.busStop === 'string' &&
    location.busStop.trim() !== '' &&
    typeof location.landmarks === 'string' &&
    location.landmarks.trim() !== ''
  );
};
