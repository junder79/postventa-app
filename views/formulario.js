import React from 'react';
import { Title, TextInput, Button } from 'react-native-paper';
import { ScrollView, StyleSheet, Text, View, Keyboard, TouchableWithoutFeedback } from 'react-native';
import { Picker } from '@react-native-picker/picker';

const cerrarTeclado = () => {
  Keyboard.dismiss();
}

function Formulario() {

  return (
    <TouchableWithoutFeedback onPress={() => cerrarTeclado()}>
      <View style={styles.contenedor}>
        <Title style={styles.parrafo}>Nueva Solicitud</Title>
        <ScrollView>
          <TextInput
            label="Rut"
            style={styles.input}
          />
          <TextInput
            label="Nombre"
            style={styles.input}
          />
          <TextInput
            label="Correo"
            style={styles.input}
          />
          <Picker
            //selectedValue={obra}
            //onValueChange={obra => seleccionarObra(obra)}
            style={styles.input}
          >
            <Picker.Item label="- Seleccione Propiedad -" value='' />
            <Picker.Item label="MAR DEL ESTE" value='1' />
            <Picker.Item label="ALTOS DE RUMIÉ" value='2' />
          </Picker>
          <TextInput
            label="Comentario"
            multiline
            numberOfLines={4}
            style={styles.input}
          />
          <TextInput
            label="Adjunto"
            style={styles.input}
          />

        </ScrollView>
        <Button mode="contained" style={styles.botonAzul}>
          Enviar
        </Button>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  contenedor: {
    flex: 1,
    //marginTop: 20,
    // marginHorizontal: '2.5%',
    backgroundColor: "#fafafa"
  },
  parrafo: {
    marginHorizontal: 20,
    marginVertical: 10,
    textAlign: 'center'
  },
  input: {
    marginBottom: 20,
    marginHorizontal: 20
  },
  botonAzul: {
    marginBottom: 20,
    marginHorizontal: 20
  },
})

export default Formulario;
