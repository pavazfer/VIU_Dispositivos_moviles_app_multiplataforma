import { Pressable, StyleSheet, Text, View } from 'react-native';
import EventCard from '../components/eventCard';
import { useEffect, useState } from 'react';
import { getEventById, deleteEvent } from '../service/eventService';

export default function BorrarEvento({navigation, route}) {
  const{id}=route.params;
  const [evento, setEvento] = useState({});

  useEffect(() => {
    getEventById(id).then(event => setEvento(event));
  }, []);

  const deleteEvento = () => {
    deleteEvent(evento.id).then(result =>{ 
      if(result.status === 200){
        navigation.navigate({name: 'Eventos', params: {title: 'refresh'}})
      }
    })
  }

  return (
    <View style={styles.container}>
      <Text>¿Seguro que desea borrar el siguiente evento?</Text>
      <View>
        <EventCard event={evento}></EventCard>
      </View>
      <View style={styles.btnContainer}>
        <Pressable style={[styles.cancelBtn, styles.btn]} onPress={() => navigation.goBack()}>
          <Text>Cancelar</Text>
        </Pressable>
        <Pressable style={[styles.borrarBtn, styles.btn]} onPress={deleteEvento}>
          <Text style={styles.borrarBtn}>Borrar</Text>
        </Pressable>
      </View>
    </View>
  );
}

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center'
    },
    btnContainer: {
      alignItems: 'center',
      flexDirection: 'row',
      justifyContent: 'center'
    },
    btn: {
      borderRadius: 3,
      paddingHorizontal: 10,
      paddingVertical: 5,
      flex: 1,
      alignItems: 'center',
      marginHorizontal: 5
    },
    borrarBtn: {
      backgroundColor: 'darkred',
      color: 'white',
    },
    cancelBtn: {
      borderColor: 'lightgray',
      borderWidth: 1
    }
  });