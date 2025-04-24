import React, { useState } from 'react';
import { View, TextInput, Button, FlatList, Text, StyleSheet } from 'react-native';

export default function HomeScreen() {
  const [task, setTask] = useState('');
  const [tasks, setTasks] = useState<string[]>([]);

  return (
    <View style={styles.container}>
      <TextInput
        placeholder="Enter task"
        value={task}
        onChangeText={setTask}
        style={styles.input}
      />
      <Button title="Add Task" onPress={() => {
        setTasks([...tasks, task]);
        setTask('');
      }} />
      <FlatList
        data={tasks}
        keyExtractor={(_, i) => i.toString()}
        renderItem={({ item }) => <Text style={styles.task}>{item}</Text>}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
  input: { borderWidth: 1, borderColor: '#aaa', padding: 10, marginBottom: 10 },
  task: { padding: 10, backgroundColor: '#eee', marginVertical: 5, borderRadius: 5 },
});
