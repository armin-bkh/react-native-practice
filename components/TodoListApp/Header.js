import React, {useState} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import SelectBox from './SelectBox';
const Header = ({onFilter}) => {
  return (
    <View style={styles.header}>
      <Text style={styles.title}>Todo List App</Text>
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

export default Header;

const styles = StyleSheet.create({
  header: {
    zIndex: 20,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingTop: 50,
    paddingBottom: 10,
    paddingHorizontal: 20,
    backgroundColor: '#185ADB',
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#fff',
  },
});
