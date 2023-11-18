import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import Splash from './screens/Splash';
import Eventos from './screens/Eventos';
import MostrarEvento from './screens/MostrarEvento';
import BorrarEvento from './screens/BorrarEvento';
import CrearEvento from './screens/CrearEvento';



const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator 
      initialRouteName="Eventos"
      >
        <Stack.Screen name="Eventos" component={Eventos} />
        <Stack.Screen name="BorrarEvento" component={BorrarEvento} options={{ title: 'Borrar Evento' }}/>
        <Stack.Screen name="MostrarEvento" component={MostrarEvento} 
          options={({ route }) => ({ title: `Evento: ${JSON.stringify(route.params.nombre)}` })}
        />
        <Stack.Screen name="CrearEvento" component={CrearEvento} options={{ title: 'Nuevo Evento' }}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
