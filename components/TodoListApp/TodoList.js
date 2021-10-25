import React from 'react';
import {View, Text, FlatList} from 'react-native';
import TodoItem from './TodoItem';

const TodoList = ({todos}) => {
  return (
    <View>
      <FlatList
        data={todos}
        keyExtractor={item => item.id}
        renderItem={({item}) => <TodoItem item={item} />}
      />
    </View>
  );
};

export default TodoList;
