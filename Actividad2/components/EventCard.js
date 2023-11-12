import { StyleSheet, Text, TouchableOpacity } from 'react-native';

export default function EventCard({event, onPress}) {

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
  <TouchableOpacity onPress={onPress} style={[styles.container]}>
    <Text >Nombre: {event.nombre}</Text>
    <Text >Precio: {event.precio}</Text>
    <Text >Ubicación: {event.ubicacion}</Text>
    <Text >Descripción: {event.descripcion}</Text>
    <Text >Fecha inicio: {formatDate(event.fecha_inicio)}</Text>
    <Text >Fecha fin: {formatDate(event.fecha_fin)}</Text>
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