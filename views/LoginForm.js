import React from 'react';
import { StyleSheet, View, Text, TextInput, TouchableOpacity , TouchableWithoutFeedback} from 'react-native';


function LoginForm() {

    const cerrarTeclado = () => {
        Keyboard.dismiss();
    }

    return (
        <TouchableWithoutFeedback onPress={() => cerrarTeclado()}>
        <View style={styles.container}>
           
            <TextInput style={styles.input} placeholder="RUT" placeholderTextColor="rgba(255,255,255,0.7)" />
            <TextInput placeholder="Contraseña" secureTextEntry style={styles.input} placeholderTextColor="rgba(255,255,255,0.7)"  />

            <TouchableOpacity style={styles.buttonEntrar}>
                <Text style={styles.buttonText}>ENTRAR</Text>
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
    buttonEntrar:{
        backgroundColor:'#2980b9',
        paddingVertical:15
    },
    buttonText:{
        // backgroundColor:'#29',
        textAlign:'center',
        color:'white',
        fontWeight:'700'
    }
})
export default LoginForm;