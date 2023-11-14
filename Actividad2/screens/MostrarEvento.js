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

  const formatDate = (date) => {
    const newDate = new Date(date);
    return newDate.toLocaleDateString('es-ES', {
      minute: 'numeric',
      year: 'numeric',
      month: 'numeric',
      day: 'numeric',
      hour: 'numeric'
    });
  };

  return (
    <View style={styles.container}>
    <Text><Text style={styles.title}>Nombre: </Text>{evento.nombre}</Text>
    <Text ><Text style={styles.title}>Precio: </Text>{evento.precio}</Text>
    <Text ><Text style={styles.title}>Ubicación: </Text>{evento.ubicacion}</Text>
    <Text ><Text style={styles.title}>Descripción: </Text>{evento.descripcion}</Text>
    <Text ><Text style={styles.title}>Fecha inicio: </Text>{formatDate(evento.fecha_inicio)}</Text>
    <Text ><Text style={styles.title}>Fecha fin: </Text>{formatDate(evento.fecha_fin)}</Text>
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
      paddingTop: 15
    },
    btn: {
      marginTop: 15,
      borderRadius: 3,
      paddingHorizontal: 10,
      paddingVertical: 5,
      alignItems: 'center',
      marginHorizontal: 5,
      alignSelf: 'flex-end'
    },
    borrarBtn: {
      backgroundColor: 'darkred',
      color: 'white',
    },
    title: {
      fontWeight: 600
    }
  });