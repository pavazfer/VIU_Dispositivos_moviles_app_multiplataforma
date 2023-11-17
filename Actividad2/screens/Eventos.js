import { StyleSheet, SafeAreaView, FlatList, Pressable, Text } from 'react-native';
import { useEffect, useState } from 'react';
import { getAllEvents } from '../service/eventService';
import EventCard from '../components/EventCard';


export default function Eventos({ navigation, route }) {
  const [eventList, setEventList] = useState([]);

  useEffect(() => {
    getAllEvents().then(events => setEventList(events));
  }, [route]);

  // Destructuración de objeto para obtener el item con nombre de variable event
  const renderEvent = ({ item: event }) => {
    return (
      <EventCard
        event={event}
        onPress={() => navigation.navigate({ name: 'MostrarEvento', params: { id: event.id, nombre: event.nombre } })}
      />
    );
  }

  const redirectToCreate = () => {
    navigation.navigate({name: 'CrearEvento'})
  }

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={eventList}
        renderItem={renderEvent}
        keyExtractor={event => event.id}
      />
    </SafeAreaView>
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
    marginHorizontal: 5,
  },
  createBtn: {
    backgroundColor: '#086cc4',
    alignSelf: 'stretch',
    marginTop: 15,
    marginBottom: 5
  },
  createBtnText: {
    color: 'white',
    fontSize: 16
  },
});