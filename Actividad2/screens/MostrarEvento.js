import { useEffect, useState } from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { getEventById } from '../service/eventService';

export default function MostrarEvento({navigation, route}) {
  const{id}=route.params;
  const [evento, setEvento] = useState({});

  useEffect(() => {
    getEventById(id).then(event => setEvento(event));
  }, []);

  const redirectToDelete = () => {
    navigation.navigate({name: 'BorrarEvento', params: {id}})
  }

  return (
    <View style={styles.container}>
      <Text>Pantalla con evento con id: {id}</Text>
      <Text>Evento: {evento.nombre}</Text>
      <Pressable style={[styles.borrarBtn, styles.btn]} onPress={redirectToDelete}>
        <Text style={styles.borrarBtn}>Borrar</Text>
      </Pressable>
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
    btn: {
      borderRadius: 3,
      paddingHorizontal: 10,
      paddingVertical: 5,
      alignItems: 'center',
      marginHorizontal: 5
    },
    borrarBtn: {
      backgroundColor: 'darkred',
      color: 'white',
    }
  });