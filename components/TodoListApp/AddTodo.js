import React, {useEffect, useRef, useState} from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Alert,
} from 'react-native';

const AddTodo = ({onSubmit, value}) => {
  const [todo, setTodo] = useState(value ? value : '');
  const inpRef = useRef();
  useEffect(() => {
    inpRef.current.focus();
  }, []);
  const changeTextHandler = text => {
    setTodo(text);
  };

  const submitHandler = () => {
    if (!todo) {
      Alert.alert('Oops!', 'minimum chars in the input must be 1', [
        {text: 'ok!', onPress: () => inpRef.current.focus()},
      ]);
      return;
    }
    onSubmit(todo);
    setTodo('');
  };

  return (
    <View style={styles.addTodoContainer}>
      <TextInput
        ref={inpRef}
        style={styles.addTodoInput}
        onChangeText={changeTextHandler}
        defaultValue={todo}
        placeholder={!value ? 'write you`r todos...' : 'edit you`r todo'}
      />
      <TouchableOpacity style={styles.addTodoBtn} onPress={submitHandler}>
        <Text style={styles.addTodoText}>{!value ? 'Add Todo' : 'submit'}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default AddTodo;

const styles = StyleSheet.create({
  addTodoContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  addTodoInput: {
    paddingVertical: 10,
    paddingHorizontal: 8,
    borderRadius: 10,
    borderColor: '#185ADB',
    borderWidth: 3,
    flexGrow: 1,
  },
  addTodoBtn: {
    marginStart: 5,
    paddingVertical: 10,
    paddingHorizontal: 8,
    backgroundColor: '#185ADB',
    borderRadius: 10,
    borderColor: '#185ADB',
    borderWidth: 3,
  },
  addTodoText: {
    color: '#fff',
  },
});
