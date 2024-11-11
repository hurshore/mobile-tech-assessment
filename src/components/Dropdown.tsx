import React from 'react';
import { StyleSheet } from 'react-native';
import { Dropdown } from 'react-native-element-dropdown';

import { getHeight, getWidth } from '../utils/responsive';
import { colors, smallMedium, xsmallMedium } from '../utils/theme';
// icons
import CheckronIcon from '../../assets/icons/chevron-down.svg';

interface DropdownData {
  label: string;
  value: string;
}

interface Props {
  data: DropdownData[];
  placeholder: string;
  selectedItem?: DropdownData;
  setSelectedItem: (item: string) => void;
}

const AppDropdown = ({
  data,
  placeholder,
  selectedItem,
  setSelectedItem,
}: Props) => {
  const onChange = (item: DropdownData) => {
    setSelectedItem(item.value);
  };

  return (
    <Dropdown
      data={data}
      onChange={onChange}
      value={selectedItem}
      labelField="label"
      valueField="value"
      placeholder={placeholder}
      placeholderStyle={styles.placeholder}
      style={styles.inputContainer}
      itemTextStyle={styles.itemText}
      selectedTextStyle={styles.selectedItemText}
      renderRightIcon={() => <CheckronIcon />}
    />
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    alignItems: 'center',
    backgroundColor: colors.grey,
    borderRadius: getHeight(8),
    flexDirection: 'row',
    gap: getWidth(8),
    marginBottom: getHeight(8),
    padding: getHeight(16),
  },
  placeholder: {
    ...smallMedium,
    color: colors.placeholder,
  },
  itemText: {
    ...xsmallMedium,
  },
  selectedItemText: {
    ...smallMedium,
    flex: 1,
  },
});

export default AppDropdown;
