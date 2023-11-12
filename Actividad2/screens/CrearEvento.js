import { StyleSheet, Text, View } from 'react-native';

export default function CrearEvento() {
  return (
    <View style={styles.container}>
      <Text>Pantalla para crear evento</Text>
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