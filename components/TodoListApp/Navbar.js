import React, {useState} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import SelectBox from './SelectBox';
const Navbar = ({onFilter}) => {
  return (
    <View style={styles.navBar}>
      <Text style={styles.header}>Todo List App</Text>
      <SelectBox
        onFilter={onFilter}
        options={[
          {label: 'All', value: 'All'},
          {label: 'Completed', value: 'Completed'},
          {label: 'Uncompleted', value: 'Uncompleted'},
        ]}
      />
    </View>
  );
};

export default Navbar;

const styles = StyleSheet.create({
  navBar: {
    zIndex: 20,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  header: {
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#185ADB',
  },
});
