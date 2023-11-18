import React, { useState } from 'react';
import { StyleSheet, View, Text, TextInput, Pressable, Image, ScrollView } from 'react-native';
import { Formik } from 'formik';
import { createEvent } from '../service/eventService';

export default function CrearEvento({ navigation }) {
  const initialValues = {
    nombre: '',
    ubicacion: '',
    precio: '',
    fechaInicio: '',
    fechaFin: '',
    descripcion: '',
  };

  const [eventAdded, setEventAdded] = useState(false);

  const createNewEvent = (newEvent) => {
    const newEventData = {
      ...newEvent,
      imagen: newEvent.imagen || 'evento.png', // Si newEvent.imagen está vacío, usa 'evento.png'
    };

    createEvent(newEventData).then(() => {
      setEventAdded(true);
      navigation.navigate({ name: 'Eventos', params: { title: 'refresh' } });
    });
  };

  const navigateToCreateEvent = () => {
    setEventAdded(false);
    navigation.navigate({ name: 'CrearEvento' });
  };

  return (
    <ScrollView contentContainerStyle={styles.scrollContainer}>
      <View style={styles.container}>
        <Image
            source={require('../assets/nuevo.png')}
            style={styles.eventImage}
            resizeMode="cover"
          />

        <Formik initialValues={initialValues} onSubmit={(values) => createNewEvent(values)}>
          {({ handleChange, handleBlur, handleSubmit, values }) => (
            <View style={styles.formContainer}>
              <View>
                <Text style={styles.label}>Nombre del evento:</Text>
                <TextInput
                  onChangeText={handleChange('nombre')}
                  onBlur={handleBlur('nombre')}
                  value={values.nombre}
                  placeholder="Nombre del evento"
                  style={styles.input}
                />
              </View>

              <View>
                <Text style={styles.label}>Precio:</Text>
                <TextInput
                  onChangeText={handleChange('precio')}
                  onBlur={handleBlur('precio')}
                  value={values.precio}
                  placeholder="Precio"
                  style={styles.input}
                  keyboardType="numeric"
                />
              </View>

              <View>
                <Text style={styles.label}>Fecha inicio:</Text>
                <TextInput
                  onChangeText={handleChange('fechaInicio')}
                  onBlur={handleBlur('fechaInicio')}
                  value={values.fechaInicio}
                  placeholder="YYYY-MM-DD HH:mm"
                  style={styles.input}
                />
              </View>

              <View>
                <Text style={styles.label}>Fecha fin:</Text>
                <TextInput
                  onChangeText={handleChange('fechaFin')}
                  onBlur={handleBlur('fechaFin')}
                  value={values.fechaFin}
                  placeholder="YYYY-MM-DD HH:mm"
                  style={styles.input}
                />
              </View>

              <View>
                <Text style={styles.label}>Ubicación:</Text>
                <TextInput
                  onChangeText={handleChange('ubicacion')}
                  onBlur={handleBlur('ubicacion')}
                  value={values.ubicacion}
                  placeholder="Ubicación"
                  style={styles.input}
                />
              </View>

              <View>
                <Text style={styles.label}>Descripción:</Text>
                <TextInput
                  onChangeText={handleChange('descripcion')}
                  onBlur={handleBlur('descripcion')}
                  value={values.descripcion}
                  placeholder="Descripción"
                  style={[styles.input, styles.multilineInput]}
                  multiline
                />
              </View>

              <Pressable onPress={handleSubmit} style={styles.btn}>
                <Text style={styles.createBtnText}>Añadir evento</Text>
              </Pressable>
            </View>
          )}
        </Formik>

      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  scrollContainer: {
    flexGrow: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'stretch',
    margin: 10,
  },
  eventImage: {
    width: 200,
    height: 200,
    marginBottom: 20,
    borderRadius: 10,
    alignSelf: 'center'
  },
  formContainer: {
    marginHorizontal: 20,
    marginVertical: 10,
    flex: 1,
  },
  label: {
    fontWeight: 'bold',
    marginTop: 10,
    marginBottom: 5,
  },
  input: {
    borderWidth: 1,
    borderColor: 'grey',
    borderRadius: 5,
    paddingHorizontal: 10,
    paddingVertical: 8,
    marginBottom: 15,
  },
  multilineInput: {
    minHeight: 80,
  },
  btn: {
    borderRadius: 5,
    paddingHorizontal: 15,
    paddingVertical: 10,
    alignItems: 'center',
    backgroundColor: '#068a0e',
    marginTop: 15,
    marginBottom: 5,
  },
  addEventBtn: {
    backgroundColor: '#086cc4',
    position: 'absolute',
    bottom: 20,
    right: 20,
    borderRadius: 50,
    padding: 15,
    alignItems: 'center',
    justifyContent: 'center',
  },
  createBtnText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});


