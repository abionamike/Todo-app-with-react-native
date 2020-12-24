import React, { useState } from 'react';
import { StyleSheet, View, TextInput, Button, Alert, Keyboard } from 'react-native';

const AddTodos = ({ setTodos }) => {
    const [todo, setTodo] = useState('');
    const handleSubmit = () => {
        if(todo.length > 3){
            setTodos(todos => (
                [ { text: todo, key: String(Math.random() * 10) }, ...todos ]
            ));
            setTodo('');
            Keyboard.dismiss();
        } else {
            Alert.alert('OOPS!', 'Todo must be over 3 characters long', [
                { text: 'Understood', onPress: () => console.log('alert closed') }
            ]);
        }
    }
    return (
        <View>
            <TextInput 
                value={todo} 
                placeholder="Add new todo..."
                onChangeText={value => setTodo(value)} 
                style={styles.input} 
            /> 
            <Button title="submit" onPress={handleSubmit} color="coral" />   
        </View>
    )
}

export default AddTodos;

const styles = StyleSheet.create({
    input: {
        marginBottom: 10,
        paddingHorizontal: 8,
        paddingVertical: 6,
        borderBottomWidth: 1,
        borderBottomColor: '#ddd',
    }
});
