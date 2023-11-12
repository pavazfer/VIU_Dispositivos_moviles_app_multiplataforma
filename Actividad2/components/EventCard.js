import { StyleSheet, Text, TouchableOpacity } from 'react-native';

export default function EventCard({event, onPress}) {
  return (
  <TouchableOpacity onPress={onPress} style={[styles.container]}>
    <Text >Nombre: {event.nombre}</Text>
    <Text >Precio: {event.precio}</Text>
    <Text >Ubicación: {event.ubicacion}</Text>
    <Text >Descripción: {event.descripcion}</Text>
    <Text >Fecha inicio: {event.fecha_inicio}</Text>
    <Text >Fecha fin: {event.fecha_fin}</Text>
  </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderRadius: 3,
    borderColor: '#49494a',
    paddingHorizontal: 15,
    paddingVertical: 10,
    marginVertical: 7
  }
});