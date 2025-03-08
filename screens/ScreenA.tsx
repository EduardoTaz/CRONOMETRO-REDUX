import React, { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement, reset, setTime } from '../redux/counterSlice';
import { RootState } from '../redux/store';

export default function ScreenA({ navigation }) {
    const dispatch = useDispatch();

    const incremento = useSelector((state: RootState) => state.counter.value); // pega o valor padrão setado para usar nos outros 
    const time = useSelector((state: RootState) => state.counter.time); // pega "time" do objeto que é o tempo definido padrão para ser manipulado nas funções
    const [taRodando, setTaRodando] = useState(false);

    useEffect(() => {
        let intervalo;
        if (taRodando) {
            intervalo = setInterval(() => {
                dispatch(setTime(time + incremento)); 
            }, 1000 * incremento);
        } else {
            clearInterval(intervalo);
        }
        return () => clearInterval(intervalo);
    }, [taRodando, incremento, time, dispatch]); 

    return (
        <View style={styles.container}>
            <Text style={styles.timer}>{new Date(time * 1000).toISOString().substr(11, 8)}</Text>

            <View style={styles.buttons}>
                <TouchableOpacity 
                    onPress={() => setTaRodando(true)} 
                    style={[styles.button, taRodando ? {backgroundColor: 'purple'} : {backgroundColor: '#4CAF50'}]}
                >
                    <Text style={styles.buttonText}>Iniciar</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => setTaRodando(false)} style={[styles.button, styles.stopButton]}>
                    <Text style={styles.buttonText}>Parar</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => { dispatch(setTime(0)); setTaRodando(false); }} style={[styles.button, styles.resetButton]}>
                    <Text style={styles.buttonText}>Resetar</Text>
                </TouchableOpacity>
            </View>

            <View style={styles.buttons}>
                <TouchableOpacity onPress={() => dispatch(increment())} style={[styles.button, styles.controlButton]}>
                    <Text style={styles.buttonText}>+</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => dispatch(decrement())} style={[styles.button, styles.controlButton]}>
                    <Text style={styles.buttonText}>-</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => dispatch(reset())} style={[styles.button, styles.controlButton]}>
                    <Text style={styles.buttonText}>Reset</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.containerIncremento}>
                <Text style={styles.mostraIncremento}>Número do intervalo: {incremento}</Text>
            </View>

            <TouchableOpacity onPress={() => navigation.replace('ScreenB')} style={[styles.button, styles.navButton]}>
                <Text style={styles.buttonText}>Ir para tela B</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => navigation.replace('Home')} style={[styles.button, styles.navButton]}>
                <Text style={styles.buttonText}>Voltar para página inicial</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: { 
        flex: 1, 
        justifyContent: "center", 
        alignItems: "center", 
        backgroundColor: '#f5f5f5', 
        padding: 20 
    },
    timer: { 
        fontSize: 48, 
        fontWeight: "bold",  
        marginBottom: 40, 
        color: '#333', 
        letterSpacing: 2 
    },
    buttons: { 
        flexDirection: "row", 
        gap: 15, 
        marginBottom: 20 
    },
    button: { 
        paddingVertical: 15, 
        paddingHorizontal: 25, 
        borderRadius: 10, 
        alignItems: 'center', 
        justifyContent: 'center', 
        shadowColor: '#000', 
        shadowOffset: { width: 0, height: 2 }, 
        shadowOpacity: 0.1, 
        shadowRadius: 4, 
        elevation: 3 
    },
    buttonText: { 
        color: "white", 
        fontSize: 16, 
        fontWeight: '600' 
    },
    startButton: { 
        backgroundColor: '#4CAF50' 
    },
    stopButton: { 
        backgroundColor: '#F44336' 
    },
    resetButton: { 
        backgroundColor: '#FF9800' 
    },
    controlButton: { 
        backgroundColor: '#2196F3' 
    },
    navButton: { 
        backgroundColor: '#9C27B0', 
        marginTop: 10 
    },
    mostraIncremento: {
        fontSize: 16,
        fontWeight: '600',

    },
    containerIncremento: {
        padding: 0,
        marginBottom: 40,

    },
});