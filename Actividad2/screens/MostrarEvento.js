import React, { useEffect, useState } from 'react';
import { Pressable, StyleSheet, Text, View, Image, ScrollView } from 'react-native';
import { getEventById } from '../service/eventService';

export default function MostrarEvento({ navigation, route }) {
  const { id } = route.params;
  const [evento, setEvento] = useState({});

  useEffect(() => {
    getEventById(id).then(event => setEvento(event));
  }, []);

  const redirectToDelete = () => {
    navigation.navigate({ name: 'BorrarEvento', params: { id } });
  };

  const formatDate = (date) => {
    const newDate = new Date(date);
    const isDate = newDate instanceof Date && !isNaN(newDate);

    return isDate ? newDate.toLocaleDateString('es-ES', {
      minute: 'numeric',
      year: 'numeric',
      month: 'numeric',
      day: 'numeric',
      hour: 'numeric'
    }): 'Fecha desconocida';
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.centeredContent}>
        <Image
          source={evento.imagen ? require(`../assets/${evento.imagen}`) : null}
          style={styles.eventImage}
          resizeMode="cover"
        />
        <Text style={styles.title}>Detalles del Evento</Text>
      </View>
      <View style={styles.detailsContainer}>
        <Text style={styles.detailText}><Text style={styles.boldText}>Nombre: </Text>{evento.nombre}</Text>
        <Text style={styles.detailText}><Text style={styles.boldText}>Precio: </Text>{evento.precio}</Text>
        <Text style={styles.detailText}><Text style={styles.boldText}>Ubicación: </Text>{evento.ubicacion}</Text>
        <Text style={styles.detailText}><Text style={styles.boldText}>Descripción: </Text>{evento.descripcion}</Text>
        <Text style={styles.detailText}><Text style={styles.boldText}>Fecha inicio: </Text>{formatDate(evento.fecha_inicio)}</Text>
        <Text style={styles.detailText}><Text style={styles.boldText}>Fecha fin: </Text>{formatDate(evento.fecha_fin)}</Text>
      </View>
      <Pressable style={styles.deleteButton} onPress={redirectToDelete}>
        <Text style={styles.deleteButtonText}>Borrar Evento</Text>
      </Pressable>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
  },
  centeredContent: {
    alignItems: 'center',
    marginBottom: 20,
  },
  eventImage: {
    width: 200,
    height: 200,
    marginBottom: 20,
    borderRadius: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  detailsContainer: {
    marginBottom: 20,
  },
  boldText: {
    fontWeight: 'bold',
  },
  detailText: {
    fontSize: 16,
    marginBottom: 10,
  },
  deleteButton: {
    backgroundColor: 'red',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
  },
  deleteButtonText: {
    color: 'white',
    fontWeight: 'bold',
  },
});
