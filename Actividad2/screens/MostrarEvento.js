import { useEffect, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { getEventById } from '../service/eventService';

export default function MostrarEvento({navigation, route}) {
  const{id}=route.params;
  const [evento, setEvento] = useState({});

  useEffect(() => {
    getEventById(id).then(event => setEvento(event));
  }, []);

  return (
    <View style={styles.container}>
      <Text>Pantalla con evento con id: {id}</Text>
      <Text>Evento: {evento.nombre}</Text>
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