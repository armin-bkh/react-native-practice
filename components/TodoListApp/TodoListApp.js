import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  TouchableWithoutFeedback,
  StyleSheet,
  Keyboard,
} from 'react-native';
import AddTodo from './AddTodo';
import Header from './Header';
import TodoList from './TodoList';

const TodoListApp = () => {
  const [todos, setTodos] = useState([]);
  const [allTodos, setAllTodos] = useState([]);
  const [filter, setFilter] = useState('All');

  useEffect(() => {
    setTodos(allTodos);
    filterTodosHandler(filter);
  }, [allTodos]);

  const addTodoHandler = value => {
    setAllTodos([
      ...allTodos,
      {
        value,
        checked: false,
        id: new Date().getTime(),
      },
    ]);
  };

  const deleteTodoHandler = id => {
    setAllTodos(prevAllTodos => prevAllTodos.filter(todo => todo.id !== id));
  };

  const checkedTodoHandler = id => {
    const cloneTodos = [...allTodos];
    const index = cloneTodos.findIndex(todo => todo.id === id);
    const selectedTodo = {...cloneTodos[index]};
    selectedTodo.checked = !selectedTodo.checked;
    cloneTodos[index] = selectedTodo;
    setAllTodos(cloneTodos);
  };

  const editTodoHandler = (id, value) => {
    const cloneTodos = [...allTodos];
    const index = cloneTodos.findIndex(todo => todo.id === id);
    const selectedTodo = {...cloneTodos[index]};
    selectedTodo.value = value;
    cloneTodos[index] = selectedTodo;
    setAllTodos(cloneTodos);
  };

  const filterTodosHandler = filter => {
    setFilter(filter);
    if (filter === 'All') setTodos(allTodos);
    if (filter === 'Completed') setTodos(allTodos.filter(todo => todo.checked));
    if (filter === 'Uncompleted')
      setTodos(allTodos.filter(todo => !todo.checked));
  };

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View style={styles.container}>
        <Header onFilter={filterTodosHandler} />
        <View style={styles.todoListContainer}>
          <AddTodo onSubmit={addTodoHandler} />
          {todos.length ? (
            <TodoList
              todos={todos}
              onDelete={deleteTodoHandler}
              onChecked={checkedTodoHandler}
              onEdit={editTodoHandler}
            />
          ) : (
            <Text style={styles.todoMessage}>Todo list is emtey!</Text>
          )}
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default TodoListApp;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  todoListContainer: {
    padding: 20,
  },
  todoMessage: {
    fontSize: 25,
    color: '#185ADB',
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 50,
  },
});
