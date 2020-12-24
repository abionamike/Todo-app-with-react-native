import React, { useState } from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';

const Header = () => {
    return (
        <View style={styles.header}>
            <Text style={styles.title}>My Todos</Text>    
        </View>
    )
}

export default Header;

const styles = StyleSheet.create({
    header: {
        height: 100,
        backgroundColor: 'coral',
    },
    title: {
        color: '#fff',
        fontWeight: 'bold',
        textAlign: 'center',
        fontSize: 20,
        marginTop: 48
    }
});
