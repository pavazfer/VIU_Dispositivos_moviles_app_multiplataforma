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
    <Text style={{ color: 'white', fontWeight: 600 }}>Nombre: {event.nombre}</Text>
    <Text style={{ color: 'white', fontWeight: 600 }}>Precio: {event.precio}</Text>
    <Text style={{ color: 'white', fontWeight: 600 }}>Ubicación: {event.ubicacion}</Text>
    <Text style={{ color: 'white', fontWeight: 600 }}>Descripción: {event.descripcion}</Text>
    <Text style={{ color: 'white', fontWeight: 600 }}>Fecha inicio: {formatDate(event.fecha_inicio)}</Text>
    <Text style={{ color: 'white', fontWeight: 600 }}>Fecha fin: {formatDate(event.fecha_fin)}</Text>

  </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#00569d',
    borderWidth: 1,
    borderRadius: 40,
    borderColor: '#49494a',
    paddingHorizontal: 15,
    paddingVertical: 10,
    marginVertical: 20
  },
  title: {
    fontWeight: 600,
    color: 'white'
  },
  text: {
    color: 'white', // Puedes cambiar el color aquí
  }
});