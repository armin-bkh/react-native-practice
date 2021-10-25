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

  const deleteTodoHandler = id => {
    setTodos(prevTodos => prevTodos.filter(todo => todo.id !== id));
  };

  const checkedTodoHandler = id => {
    const cloneTodos = [...todos];
    const index = cloneTodos.findIndex(todo => todo.id === id);
    const selectedTodo = {...cloneTodos[index]};
    selectedTodo.checked = !selectedTodo.checked;
    cloneTodos[index] = selectedTodo;
    setTodos(cloneTodos);
  };

  return (
    <View style={styles.todoListContainer}>
      <Text style={styles.header}>Todo List App</Text>
      <AddTodo onAdd={addTodoHandler} />
      <TodoList
        todos={todos}
        onDelete={deleteTodoHandler}
        onChecked={checkedTodoHandler}
      />
    </View>
  );
};

export default TodoListApp;

const styles = StyleSheet.create({
  todoListContainer: {
    marginTop: 34,
    padding: 20,
  },
  header: {
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#185ADB',
  },
});
