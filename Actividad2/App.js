import React, { useState, useEffect } from 'react';
import { StyleSheet, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import Splash from './screens/Splash';
import CrearEvento from './screens/CrearEvento';
import EventsContainer from './screens/EventsContainer';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';

const Tab = createBottomTabNavigator();


export default function App() {

  const [isSplashVisible, setSplashVisible] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setSplashVisible(false);
    }, 1500); // Tiempo de espera simulado de 1.5s
  }, []);

  if (isSplashVisible) {
    return <Splash navigation={null} />; // No es necesario pasar navigation aquí
  }

  return (
    <NavigationContainer>
      <View style={styles.container}>
      <Tab.Navigator  screenOptions={{
            headerStyle: {
              backgroundColor: '#3498db',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold',
            }
          }}>
        <Tab.Screen 
          name="EventsContainer" 
          component={EventsContainer} 
          options={{ title: 'Eventos', headerShown: false, tabBarIcon: ({ color, size }) => (
            <Ionicons name="calendar" color={color} size={size} />
          ), }}
          />
          <Tab.Screen 
          name="CrearEvento" 
          component={CrearEvento} 
          options={{ title: 'Nuevo Evento', tabBarIcon: ({ color, size }) => (
            <Ionicons name="add-circle" color={color} size={size} />
          )}}
          />
        </Tab.Navigator>
      </View>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ecf0f1',
  }
});

