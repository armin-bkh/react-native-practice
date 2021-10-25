import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';

const AddTodo = ({addTodo}) => {
  const [todo, setTodo] = useState('');

  const changeTextHandler = text => {
    setTodo(text);
  };

  return (
    <View style={styles.addTodoContainer}>
      <TextInput
        style={styles.addTodoInput}
        onChangeText={changeTextHandler}
        defaultValue={todo}
      />
      <TouchableOpacity style={styles.addTodoBtn} onPress={() => onAdd(todo)}>
        <Text style={styles.addTodoText}>Add Todo</Text>
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
