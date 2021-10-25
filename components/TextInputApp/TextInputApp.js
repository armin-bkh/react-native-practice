import React, {useState} from 'react';
import {Text, TextInput, View, StyleSheet} from 'react-native';

const TextInputApp = () => {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');

  return (
    <View style={styles.container}>
      <Text>your name is:</Text>
      <TextInput
        multiline
        placeholder="jason tetham"
        style={styles.input}
        onChangeText={txt => setName(txt)}
        defaultValue={name}
      />
      <Text>{name}</Text>
      <Text>your age is:</Text>
      <TextInput
        keyboardType="numeric"
        placeholder="99"
        style={styles.input}
        onChangeText={txt => setAge(txt)}
        defaultValue={age}
      />
      <Text>{age}</Text>
    </View>
  );
};

export default TextInputApp;

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'skyblue',
    marginTop: 40,
    padding: 20,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: 200,
  },
  input: {
    marginTop: 5,
    width: 200,
    paddingVertical: 5,
    paddingHorizontal: 5,
    borderColor: 'blue',
    borderWidth: 1,
    borderRadius: 10,
  },
});
