import React, { useState, useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, TouchableOpacity } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons'; 
import Splash from './screens/Splash';
import Eventos from './screens/Eventos';
import MostrarEvento from './screens/MostrarEvento';
import BorrarEvento from './screens/BorrarEvento';
import CrearEvento from './screens/CrearEvento';

const Stack = createNativeStackNavigator();

export default function App() {

  const [isSplashVisible, setSplashVisible] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setSplashVisible(false);
    }, 5000); // Tiempo de espera simulado de 5s
  }, []);

  if (isSplashVisible) {
    return <Splash navigation={null} />; // No es necesario pasar navigation aquí
  }

  return (
    <NavigationContainer>
      <View style={styles.container}>
        <StatusBar style={styles.statusBar} />
        <Stack.Navigator
          initialRouteName="Eventos"
          screenOptions={{
            headerStyle: {
              backgroundColor: '#3498db',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
          }}
        >
          <Stack.Screen
            name="Eventos"
            component={Eventos}
            options={({ navigation }) => ({
              title: 'Mis Eventos',
              headerRight: () => (
                <TouchableOpacity
                  onPress={() => navigation.navigate('CrearEvento')}
                  style={styles.addButton}
                >
                  <Ionicons name="add-circle" size={30} color="#fff" />
                </TouchableOpacity>
              ),
            })}
          />
          <Stack.Screen
            name="BorrarEvento"
            component={BorrarEvento}
            options={{ title: 'Borrar Evento' }}
          />
          <Stack.Screen
            name="MostrarEvento"
            component={MostrarEvento}
            options={({ route }) => ({
              title: `Evento: ${route.params.nombre}`,
            })}
          />
          <Stack.Screen
            name="CrearEvento"
            component={CrearEvento}
            options={{ title: 'Nuevo Evento' }}
          />
        </Stack.Navigator>
      </View>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ecf0f1',
  },
  addButton: {
    marginRight: 15,
  },
  statusBar: {
    backgroundColor: '#3498db',
    translucent: true,
    barStyle: 'light-content',
  },
});

