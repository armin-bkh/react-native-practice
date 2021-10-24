import React, {useState} from 'react';
import {StyleSheet, Button, View, Text} from 'react-native';

const BtnApp = () => {
  const [name, setName] = useState('...');

  const clickhandler = () => setName('Armin');

  return (
    <View style={styles.container}>
      <Text>my name is {name}</Text>
      <View style={styles.btn}>
        <Button onPress={clickhandler} title="show my name" />
      </View>
    </View>
  );
};

export default BtnApp;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  btn: {
    borderRadius: 10,
    marginTop: 15,
    paddingVertical: 1,
    paddingHorizontal: 10,
    backgroundColor: 'skyblue',
  },
});
