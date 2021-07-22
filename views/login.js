
import React, { useState } from 'react';

import {
  Dimensions,
  ImageBackground,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  Image,
  Label,
} from 'react-native';
import LoginForm from './LoginForm';
function Login() {


  return (
    <View style={styles.container}>
      <View style={styles.logoContainer}>
        <Image
          style={styles.logo}
          source={require('../src/img/postventa.png')}></Image>
        <Text style={styles.titleLogo}>INICIAR SESIÓN</Text>
      </View>
      <View style={styles.formContainer}>
        <LoginForm/>
      </View>
    </View>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#3498db',
    // justifyContent:'center'
  },
  formContainer: {

  },
  logoContainer: {
    alignItems: 'center',
    flexGrow: 1,
    justifyContent: 'center'
  },
  logo: {
    width: 240,
    height: 40
  },
  titleLogo: {
    color: '#ffffff',
    fontSize: 25,
    fontWeight: 'bold',
    marginTop: 10,
    textAlign: 'center',
    opacity: 0.9
  }

});

export default Login;
