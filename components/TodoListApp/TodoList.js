import React from 'react';
import {View, Text, FlatList} from 'react-native';
import TodoItem from './TodoItem';

const TodoList = ({todos, onChecked, onDelete}) => {
  return (
    <View>
      <FlatList
        data={todos}
        keyExtractor={item => item.id}
        renderItem={({item}) => (
          <TodoItem
            item={item}
            onChecked={() => onChecked(item.id)}
            onDelete={() => onDelete(item.id)}
          />
        )}
      />
    </View>
  );
};

export default TodoList;
