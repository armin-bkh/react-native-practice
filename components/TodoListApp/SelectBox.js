import React, {useState} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';

const SelectBox = ({options, onFilter}) => {
  const [selectedOption, setSelectedOption] = useState('All');
  const [isShow, setIsShow] = useState(false);

  const changeSelectOptionHandler = value => {
    setSelectedOption(value);
    onFilter(value);
  };

  return (
    <View style={styles.selectBoxContainer}>
      <TouchableOpacity
        onPress={() => setIsShow(prevIsShow => !prevIsShow)}
        style={styles.selectViewr}>
        <Text>{selectedOption}</Text>
      </TouchableOpacity>
      {isShow && (
        <View style={styles.optionsContainer}>
          {options.map(item => (
            <TouchableOpacity
              onPress={() => changeSelectOptionHandler(item.value)}
              key={item.value}
              style={styles.option}>
              <Text>{item.label}</Text>
            </TouchableOpacity>
          ))}
        </View>
      )}
    </View>
  );
};

export default SelectBox;

const styles = StyleSheet.create({
  selectBoxContainer: {
    position: 'relative',
  },
  selectViewr: {
    paddingHorizontal: 10,
    paddingVertical: 8,
    borderColor: '#777',
    borderWidth: 1,
    borderRadius: 5,
    width: 120,
  },
  optionsContainer: {
    width: 120,
    backgroundColor: '#fff',
    position: 'absolute',
    top: 40,
    borderColor: '#777',
    borderRadius: 5,
    borderWidth: 1,
  },
  option: {
    paddingHorizontal: 10,
    paddingVertical: 8,
  },
});