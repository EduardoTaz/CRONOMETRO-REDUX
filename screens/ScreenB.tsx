// screens/ScreenB.tsx
import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement, reset } from '../redux/counterSlice';
import { RootState } from '../redux/store';

export default function ScreenB({ navigation }) {
  
  const count = useSelector((state: RootState) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <View style={styles.container}>
        <Text style={styles.text}>Contador: {count}</Text>

        <TouchableOpacity onPress={() => dispatch(increment())} style={styles.button}>
          <Text style={styles.buttonText}>+</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => dispatch(decrement())} style={styles.button}>
          <Text style={styles.buttonText}>-</Text>
        </TouchableOpacity>


        <TouchableOpacity onPress={() => dispatch(reset())} style={styles.button}>
          <Text style={styles.buttonText}>Reset</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate('ScreenA')} style={styles.button}>
          <Text style={styles.buttonText}>Ir para tela A</Text>
        </TouchableOpacity>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 24,
    marginBottom: 10,
  },
  button: {
    backgroundColor: "blue",
    padding: 10,
    borderRadius: 5,
    margin: 5,
  },
  buttonText: {
    color: "white",
    fontSize: 20,
  },  
});
