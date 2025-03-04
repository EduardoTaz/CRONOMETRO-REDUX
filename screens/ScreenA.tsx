import React, { useEffect, useRef } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { start, stop, reset, tick } from '../redux/cronometroSlice';
import { RootState } from '../redux/store';

export default function ScreenA({ navigation }) {
    const dispatch = useDispatch();
    const tempo = useSelector((state: RootState) => state.cronometro.tempo);
    const taRodando = useSelector((state: RootState) => state.cronometro.taRodando);
    
    const intervaloRef = useRef<NodeJS.Timeout | null>(null);

    useEffect(() => {
        if (taRodando && !intervaloRef.current) {
            intervaloRef.current = setInterval(() => {
                dispatch(tick());
            }, 1000);
        }

        return () => {
            if (intervaloRef.current) {
                clearInterval(intervaloRef.current);
                intervaloRef.current = null;
            }
        };
    }, [taRodando, dispatch]);

    return (
        <View style={styles.container}>
            <Text style={styles.timer}>{new Date(tempo * 1000).toISOString().substr(11, 8)}</Text>

            <View style={styles.buttons}>
                <TouchableOpacity onPress={() => dispatch(start())} style={styles.button}>
                    <Text style={styles.buttonText}>Iniciar</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => dispatch(stop())} style={styles.button}>
                    <Text style={styles.buttonText}>Parar</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => dispatch(reset())} style={styles.button}>
                    <Text style={styles.buttonText}>Resetar</Text>
                </TouchableOpacity>
            </View>

            <TouchableOpacity onPress={() => navigation.replace('ScreenB')} style={styles.button}>
                <Text style={styles.buttonText}>Ir para tela B</Text>
            </TouchableOpacity>

            <View style={styles.container}>
              <TouchableOpacity style={styles.button} onPress={() => navigation.replace('Home')}>
                <Text style={styles.buttonText}>Voltar para página inicial</Text>
              </TouchableOpacity>
            </View>
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
