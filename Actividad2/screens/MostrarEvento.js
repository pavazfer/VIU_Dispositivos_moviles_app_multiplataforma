import { StyleSheet, Text, View } from 'react-native';

export default function MostrarEvento() {
  return (
    <View style={styles.container}>
      <Text>Pantalla con evento con id</Text>
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