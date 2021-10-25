import React, {useState} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import AddTodo from './AddTodo';
import TodoList from './TodoList';

const TodoListApp = () => {
  const [todos, setTodos] = useState([]);
  const addTodoHandler = value => {
    setTodos([
      ...todos,
      {
        value: value,
        checked: false,
        id: new Date().getTime(),
      },
    ]);
  };
  return (
    <View style={styles.todoListContainer}>
      <AddTodo onAdd={addTodoHandler} />
      <TodoList todos={todos} />
    </View>
  );
};

export default TodoListApp;

const styles = StyleSheet.create({
  todoListContainer: {
    marginTop: 34,
    padding: 20,
  },
});