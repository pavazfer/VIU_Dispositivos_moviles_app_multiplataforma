import { StyleSheet, Text, View } from 'react-native';

export default function BorrarEvento() {
  return (
    <View style={styles.container}>
      <Text>Pantalla para confirmar borrar un evento</Text>
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