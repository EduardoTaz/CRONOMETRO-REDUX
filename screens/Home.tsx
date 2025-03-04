import React from 'react';
import { TouchableOpacity, View, Button, Text, StyleSheet } from 'react-native';

export default function Home({ navigation }) {
    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.button} onPress={() => navigation.replace('ScreenA')}> 
                <Text style={styles.buttonText}>Ir para ScreenA</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={() => navigation.replace('ScreenB')}>
                <Text style={styles.buttonText}>Ir para ScreenB</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create ({
    container: {flex: 1, justifyContent: "center", alignItems: "center" },
    button: {backgroundColor: '#007bff', padding: 15, margin: 10, borderRadius: 10},
    buttonText: {fontSize: 16, color: 'white'}
})