import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const ToDoList = ({ tasks }) => {
  return (
    <ul>
    <View>
      {tasks.map((task, index) => (
        <Text key={index} style={styles.taskText}>{task}</Text>
      ))}
    </View>
    </ul>
  );
};

const styles = StyleSheet.create({
  taskText: {
    fontSize: 18,
    marginVertical: 8,
  },
});

export default ToDoList;
