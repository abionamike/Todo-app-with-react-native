import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, View, FlatList, TouchableWithoutFeedback, Keyboard } from 'react-native';
import Header from './components/Header';
import TodoItem from './components/TodoItem';
import AddTodos from './components/AddTodos';

const App = () => {
  const [todos, setTodos] = useState([
    { text: 'buy coffee', key: '1' },
    { text: 'create an app', key: '2' },
    { text: 'play on the switch', key: '3' },
  ]);

  return (
    <TouchableWithoutFeedback onPress={ () => { Keyboard.dismiss() }}>
      <View style={styles.container}>
        <Header />
        <View style={styles.content}>
          <AddTodos setTodos={setTodos} />
          <View style={styles.list}>
            <FlatList
              data={todos}
              renderItem={({ item }) => (
                <TodoItem item={item} setTodos={setTodos} />
              )}
              showsVerticalScrollIndicator={false}
            />
          </View>
        </View>
        
        <StatusBar style="auto" />
      </View>
    </TouchableWithoutFeedback>
  );
}

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  content: {
    padding: 40,
    flex: 1
  },
  list: {
    marginTop: 20,
    flex: 1
  }
});
