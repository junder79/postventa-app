import React, { useState } from 'react';
import { StyleSheet, View, Text, TextInput, TouchableOpacity, TouchableWithoutFeedback, Keyboard } from 'react-native';
import axios from 'axios';


function LoginForm() {

    const cerrarTeclado = () => {
        Keyboard.dismiss();
    }
    const [rut, guardarRut] = useState('');
    const [password, guardarPassword] = useState('');

    const validarInicioSesion = async () => {
        console.log("TEST");
        const formData = new FormData();
        formData.append('run', rut);
        formData.append('contrasena', password);
        formData.append('tipo', 'app');
        axios.post('https://grupohexxa.cl/postventa_desarrollo/validaciones/validarLogin.php', formData, {

        })
            .then(response => {
                console.log("Respuesta " + response.data);
                navigation.navigate("Formulario");

            })
            .catch(e => {
                // Podemos mostrar los errores en la consola
                console.log(e);


            })
    }
    return (
        <TouchableWithoutFeedback onPress={() => cerrarTeclado()}>
            <View style={styles.container}>

                <TextInput
                    style={styles.input}
                    placeholder="RUT"
                    placeholderTextColor="rgba(255,255,255,0.7)"
                    onChangeText={rut => guardarRut(rut)}
                />
                <TextInput
                    placeholder="Contraseña"
                    secureTextEntry
                    style={styles.input}
                    placeholderTextColor="rgba(255,255,255,0.7)"
                    onChangeText={password => guardarPassword(password)}
                />

                <TouchableOpacity style={styles.buttonEntrar}>
                    <Text onPress={()=>validarInicioSesion()} style={styles.buttonText}>ENTRAR</Text>
                </TouchableOpacity>

            </View>
        </TouchableWithoutFeedback>
    )
}
const styles = StyleSheet.create({
    container: {
        padding: 20
    },
    input: {
        height: 40,
        backgroundColor: 'rgba(255,255,255,0.2)',
        marginBottom: 20,
        color: '#FFF',
        paddingHorizontal: 10
    },
    buttonEntrar: {
        backgroundColor: '#2980b9',
        paddingVertical: 15
    },
    buttonText: {
        // backgroundColor:'#29',
        textAlign: 'center',
        color: 'white',
        fontWeight: '700'
    }
})
export default LoginForm;