import React, {useState} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';

const TodoItem = ({item, onDelete, onEdit, onChecked}) => {
  return (
    <View style={styles.todoItem}>
      <Text
        onPress={onChecked}
        style={[item.checked && styles.todoChecked, styles.todoText]}>
        {item.value}
      </Text>
      <TouchableOpacity style={styles.todoBtn} onPress={onDelete}>
        <Text>Delete</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.todoBtn} onPress={onEdit}>
        <Text>Edit</Text>
      </TouchableOpacity>
    </View>
  );
};

export default TodoItem;

const styles = StyleSheet.create({
  todoItem: {
    display: 'flex',
    flexDirection: 'row',
    paddingHorizontal: 5,
    paddingVertical: 8,
    backgroundColor: '#EFEFEF',
    marginBottom: 10,
    borderRadius: 10,
    alignItems: 'center',
  },
  todoText: {
    flexGrow: 1,
    color: '#185ADB',
    fontWeight: 'bold',
    fontSize: 15,
  },
  todoChecked: {
    textDecorationColor: '#000',
    textDecorationLine: 'line-through',
    textDecorationStyle: 'solid',
  },
  todoBtn: {
    paddingHorizontal: 10,
    paddingVertical: 8,
    backgroundColor: '#FFC947',
    marginHorizontal: 3,
    borderRadius: 5,
  },
});
