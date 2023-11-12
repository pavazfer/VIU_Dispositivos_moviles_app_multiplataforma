import { StyleSheet, SafeAreaView, FlatList, Text} from 'react-native';
import { useEffect, useState } from 'react';
import {getAllEvents} from '../service/eventService';
import EventCard from '../components/EventCard';


export default function Eventos() {
  const [eventList, setEventList] = useState([]);

  useEffect(() => {
    getAllEvents().then(events => setEventList(events));
  }, []);

  // Destructuración de objeto para obtener el item con nombre de variable event
  const renderEvent = ({item: event}) => {
    return (
      <EventCard
        event={event}
        onPress={() => console.log("Seleccionado evento", event.id)}
      />
    );
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
});