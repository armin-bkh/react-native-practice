import React, {useState} from 'react';
import {View, Text, FlatList} from 'react-native';
import AddTodo from './AddTodo';
import TodoItem from './TodoItem';

const TodoList = ({todos, onChecked, onDelete, onEdit}) => {
  const [edit, setEdit] = useState({});

  const editHandler = todo => {
    onEdit(edit.id, todo);
    setEdit({});
  };

  return (
    <View>
      <FlatList
        data={todos}
        keyExtractor={item => item.id}
        renderItem={({item}) =>
          edit.id === item.id ? (
            <AddTodo value={item.value} onSubmit={editHandler} />
          ) : (
            <TodoItem
              item={item}
              onChecked={() => onChecked(item.id)}
              onDelete={() => onDelete(item.id)}
              onEdit={() => setEdit(item)}
            />
          )
        }
      />
    </View>
  );
};

export default TodoList;
