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
  <TouchableOpacity onPress={onPress} style={styles.container}>
    <Text><Text style={styles.title}>Nombre: </Text>{event.nombre}</Text>
    <Text ><Text style={styles.title}>Precio: </Text>{event.precio}</Text>
    <Text ><Text style={styles.title}>Ubicación: </Text>{event.ubicacion}</Text>
    <Text ><Text style={styles.title}>Descripción: </Text>{event.descripcion}</Text>
    <Text ><Text style={styles.title}>Fecha inicio: </Text>{formatDate(event.fecha_inicio)}</Text>
    <Text ><Text style={styles.title}>Fecha fin: </Text>{formatDate(event.fecha_fin)}</Text>
  </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    borderWidth: 1,
    borderRadius: 3,
    borderColor: '#49494a',
    paddingHorizontal: 15,
    paddingVertical: 10,
    marginVertical: 7
  },
  title: {
    fontWeight: 600
  }
});