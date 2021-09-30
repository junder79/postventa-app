
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import { NativeBaseProvider, Box } from 'native-base';


// Importar los componentes 
import Login  from './views/login';
import Formulario from './views/formulario';

import { Provider as PaperProvider, DefaultTheme } from 'react-native-paper';
const Stack = createStackNavigator();
const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: '#0d4591'
  }
}

function App() {

  return (

    <>
      <PaperProvider theme={theme}>
        <NavigationContainer >
          <Stack.Navigator screenOptions={{
            headerTitleAlign: 'center',
            headerStyle: {
              backgroundColor: theme.colors.primary
            },
            headerTintColor: theme.colors.surface,
          }}>
         
            <Stack.Screen
              name="Postventa"
              component={Formulario}
              options={({ navigation, route }) => ({
                //title: "Escanear Código QR",
              
              })}
            />
     
            <Stack.Screen
              name="Formulario"
              component={Formulario}
              options={({ navigation, route }) => ({
                title: "Escanear Código QR"
              })}
            />

          </Stack.Navigator>
        </NavigationContainer>
      </PaperProvider>
    </>

  );
}

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
