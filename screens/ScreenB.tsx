import React, { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement, reset, setTime } from '../redux/counterSlice';
import { RootState } from '../redux/store';

export default function ScreenB({ navigation }) {
    const dispatch = useDispatch();

    const incremento = useSelector((state: RootState) => state.counter.value);
    const tempo = useSelector((state: RootState) => state.counter.time);
    const [taRodando, setTaRodando] = useState(false);

    useEffect(() => {
        let intervalo;
        if (taRodando) {
            intervalo = setInterval(() => {
                dispatch(setTime(tempo + incremento)); // ✅ Correção aplicada
            }, 1000);
        } else {
            clearInterval(intervalo);
        }
        return () => clearInterval(intervalo);
    }, [taRodando, incremento, tempo, dispatch]); // Agora observa `tempo` corretamente

    return (
        <View style={styles.container}>
            <Text style={styles.timer}>{new Date(tempo * 1000).toISOString().substr(11, 8)}</Text>

            <View style={styles.buttons}>
                <TouchableOpacity onPress={() => setTaRodando(true)} style={styles.button}>
                    <Text style={styles.buttonText}>Iniciar</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => setTaRodando(false)} style={styles.button}>
                    <Text style={styles.buttonText}>Parar</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => { dispatch(setTime(0)); setTaRodando(false); }} style={styles.button}>
                    <Text style={styles.buttonText}>Resetar</Text>
                </TouchableOpacity>
            </View>

            <View style={styles.buttons}>
                <TouchableOpacity onPress={() => dispatch(increment())} style={styles.button}>
                    <Text style={styles.buttonText}>+</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => dispatch(decrement())} style={styles.button}>
                    <Text style={styles.buttonText}>-</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => dispatch(reset())} style={styles.button}>
                    <Text style={styles.buttonText}>Reset</Text>
                </TouchableOpacity>
            </View>

            <TouchableOpacity onPress={() => navigation.replace('ScreenA')} style={styles.button}>
                <Text style={styles.buttonText}>Ir para tela A</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => navigation.replace('Home')} style={styles.button}>
                <Text style={styles.buttonText}>Voltar para página inicial</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: { flex: 1, justifyContent: "center", alignItems: "center" },
    timer: { fontSize: 48, fontWeight: "bold", marginBottom: 20 },
    buttons: { flexDirection: "row", gap: 10 },
    button: { backgroundColor: "#007bff", padding: 10, borderRadius: 5, margin: 7 },
    buttonText: { color: "white", fontSize: 16 },
});
