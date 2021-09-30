import React, { useState } from 'react';
import { Text, View, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { Button, Paragraph, Dialog, Portal } from 'react-native-paper';
// import globalStyles from '../styles/global'

const Foto = ({ item, eliminarFoto }) => {

    const [alerta, guardarAlerta] = useState(false);

    return (
        <View>
            <TouchableOpacity onPress={() => guardarAlerta(true)} activeOpacity={1}>
                <Image
                    style={styles.foto}
                    source={{ uri: item.uri }}
                />
            </TouchableOpacity>

            <Portal>
                <Dialog
                    visible={alerta}
                    onDismiss={() => guardarAlerta(false)}
                >
                    <Dialog.Title>Eliminar Foto</Dialog.Title>
                    <Dialog.Content>
                        <Paragraph>¿Desea eliminar esta foto?</Paragraph>
                    </Dialog.Content>
                    <Dialog.Actions>
                        <Button onPress={() => guardarAlerta(false)}>NO ELIMINAR</Button>
                        <Button onPress={() => { guardarAlerta(false); eliminarFoto(item.id) }}>ELIMINAR</Button>
                    </Dialog.Actions>
                </Dialog>
            </Portal>
        </View>
    );
}

const styles = StyleSheet.create({
    foto: {
        width: 250,
        height: 300,
        marginRight: 10,
        marginBottom: 20
    }
})



export default Foto;