import React, { useEffect, useState } from 'react';
import { StyleSheet, View, Text, Pressable } from 'react-native';
import EventCard from '../components/EventCard';
import { getEventById, deleteEvent } from '../service/eventService';

export default function BorrarEvento({ navigation, route }) {
  const { id } = route.params;
  const [evento, setEvento] = useState({});

  console.log(evento)

  useEffect(() => {
    getEventById(id).then(event => setEvento(event));
  }, []);

  const deleteEvento = () => {
    deleteEvent(evento.id).then(result => {
      if (result.status === 200) {
        navigation.navigate({ name: 'Eventos', params: { title: 'refresh' } });
      }
    });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>¿Seguro que desea borrar el siguiente evento?</Text>
      <View style={styles.eventContainer}>
        <EventCard event={evento} containerStyle={styles.eventCard} />
      </View>
      <View style={styles.btnContainer}>
        <Pressable style={[styles.btn, styles.cancelBtn]} onPress={() => navigation.goBack()}>
          <Text style={styles.btnText}>Cancelar</Text>
        </Pressable>
        <Pressable style={[styles.btn, styles.borrarBtn]} onPress={deleteEvento}>
          <Text style={styles.btnText}>Borrar</Text>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    alignItems: 'center',
    padding: 16,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 16,
    textAlign: 'center'
  },
  eventContainer: {
    width: '100%',
  },
  btnContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 16,
  },
  btn: {
    borderRadius: 8,
    paddingHorizontal: 20,
    paddingVertical: 12,
    alignItems: 'center',
    marginHorizontal: 8,
    flex: 1,
  },
  btnText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  cancelBtn: {
    backgroundColor: 'lightgray',
  },
  borrarBtn: {
    backgroundColor: 'red',
    color: 'white',
  },
  
  // Estilo adicional para redondear la tarjeta del evento
  eventCard: {
    borderRadius: 20,
    overflow: 'hidden',
  },
});