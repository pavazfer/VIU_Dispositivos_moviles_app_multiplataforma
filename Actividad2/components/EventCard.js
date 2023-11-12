import { StyleSheet, Text, TouchableOpacity } from 'react-native';

export default function EventCard({event, onPress}) {
  return (
  <TouchableOpacity onPress={onPress} style={[styles.event]}>
    <Text >{event.nombre}</Text>
  </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  item: {}
});