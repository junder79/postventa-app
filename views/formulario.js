import React, { useState } from 'react';
import { Title, TextInput, Button, Snackbar } from 'react-native-paper';
import { ScrollView, StyleSheet, Text, View, Keyboard, TouchableWithoutFeedback, FlatList } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import shortid from 'shortid';
import Foto from '../componentes/Foto';
import ImagePicker from 'react-native-image-picker';

function Formulario() {

  const [fotos, guardarFotos] = useState('');

  const eliminarFoto = id => {
    guardarFotos((fotosActuales) => {
      return fotosActuales.filter(foto => foto.id !== id);
    });
  }

  const options = {
    title: 'Subir Foto',
    takePhotoButtonTitle: 'Cámara',
    chooseFromLibraryButtonTitle: 'Galería',
    cancelButtonTitle: 'Cancelar',
    storageOptions: {
      skipBackup: true,
      path: 'images',
    },
    quality: 0.2
  };

  const cerrarTeclado = () => {
    Keyboard.dismiss();
  };

  const [visibleSnackbar, setVisibleSnackbar] = useState(false);
  const onToggleSnackBar = () => setVisibleSnackbar(!visibleSnackbar);
  const onDismissSnackBar = () => setVisibleSnackbar(false);

  const subirFoto = () => {
    console.log(ImagePicker);
    ImagePicker.showImagePicker(options, (response) => {
      //console.log('Response = ', response);

      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      } else if (response.customButton) {
        console.log('User tapped custom button: ', response.customButton);
      } else {

        const foto = { uri: response.uri, id: 1, base64: "" };
        // You can also display the image using data:
        // const source = { uri: 'data:image/jpeg;base64,' + response.data };

        // foto.id = shortid.generate();
        // foto.base64 = "";
        // ImgToBase64.getBase64String(foto.uri)
        //     .then(base64String =>

        //         foto.base64 = base64String


        //     )
        //     .catch(err => console.log(err));

        //const fotosNuevo = [...fotos, foto];

        guardarFotos([foto]);
        onToggleSnackBar();
      }
    });
  }

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

          <FlatList
            horizontal
            data={fotos}
            renderItem={({ item }) => <Foto item={item} eliminarFoto={eliminarFoto} />}
          />

        </ScrollView>

        <Snackbar
          visible={visibleSnackbar}
          onDismiss={onDismissSnackBar}
          duration={3000}
          style={{ backgroundColor: '#5cb85c' }}
        >
          Foto Agregada
        </Snackbar>

        <Button icon="camera-plus" mode="contained" style={styles.buttonImage} onPress={() => subirFoto()}>
          {fotos ? "Cambiar" : "Subir" } Foto
        </Button>

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
    marginTop: 20,
    marginHorizontal: '2.5%',
    backgroundColor: "#f1f1f1"
  },
  parrafo: {
    marginVertical: 10,
    textAlign: 'center'
  },
  input: {
    marginBottom: 20,
  },
  botonAzul: {
    marginBottom: 20,
  },
  buttonImage: {
    marginBottom: 20,
    backgroundColor: "#5cb85c"
  }
})

export default Formulario;
