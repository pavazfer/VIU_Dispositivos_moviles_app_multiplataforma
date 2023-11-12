import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Eventos from './screens/Eventos';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>EVENTOS</Text>
      <Eventos></Eventos>
      <StatusBar style="auto" />
    </View>
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
