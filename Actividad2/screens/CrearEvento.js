import { Button, Pressable, StyleSheet, Text, TextInput, View } from 'react-native';
import { Formik } from 'formik';
import { createEvent } from '../service/eventService';

export default function CrearEvento({ navigation }) {
  let initialValues = {
    nombre: '',
    ubicacion: '',
    precio: '',
    fechaInicio: '',
    fechaFin: '',
    descripcion: ''
  }

  const createNewEvent = (newEvent) => {
    createEvent(newEvent).then(() =>
      navigation.navigate({ name: 'Eventos', params: { title: 'refresh' } })
    )
  }

  return (
    <View style={styles.container}>
      <Formik
        initialValues={initialValues}
        onSubmit={(values) => createNewEvent(values)}
      >
        {({ handleChange, handleBlur, handleSubmit, values }) => (
          <View style={styles.formContainer}>
            <View>
              <Text>Nombre del evento: </Text>
              <TextInput
                onChangeText={handleChange('nombre')}
                onBlur={handleBlur('nombre')}
                value={values.nombre}
                style={styles.input}
              />
            </View>
            <View>
              <Text>Precio: </Text>
              <TextInput
                onChangeText={handleChange('precio')}
                onBlur={handleBlur('precio')}
                value={values.precio}
                style={styles.input}
              />
            </View>
            <View>
              <Text>Fehca inicio: </Text>
              <TextInput
                onChangeText={handleChange('fechaInicio')}
                onBlur={handleBlur('fechaInicio')}
                value={values.fechaInicio}
                style={styles.input}
              />
            </View>
            <View>
              <Text>Fecha fin: </Text>
              <TextInput
                onChangeText={handleChange('fechaFin')}
                onBlur={handleBlur('fechaFin')}
                value={values.fechaFin}
                style={styles.input}
              />
            </View>
            <View>
              <Text>Ubicación: </Text>
              <TextInput
                onChangeText={handleChange('ubicacion')}
                onBlur={handleBlur('ubicacion')}
                value={values.ubicacion}
                style={styles.input}
              />
            </View>
            <View>
              <Text>Descripción: </Text>
              <TextInput
                onChangeText={handleChange('descripcion')}
                onBlur={handleBlur('descripcion')}
                value={values.descripcion}
                style={styles.input}
              />
            </View>

            <Pressable onPress={handleSubmit} style={[styles.btn, styles.createBtn]}>
              <Text style={styles.createBtnText}>Añadir evento</Text>
            </Pressable>
          </View>
        )}
      </Formik>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'stretch'
  },
  formContainer: {
    marginHorizontal: 20,
    marginVertical: 10,
    flex: 1,
  },
  input: {
    borderWidth: 1,
    borderColor: 'grey',
    borderRadius: 3,
    paddingHorizontal: 10,
    paddingVertical: 5,
    marginBottom: 10,
    marginTop: 5
  },
  btn: {
    borderRadius: 3,
    paddingHorizontal: 10,
    paddingVertical: 5,
    alignItems: 'center',
    marginHorizontal: 5,
  },
  createBtn: {
    backgroundColor: '#068a0e',
    marginTop: 15,
    marginBottom: 5
  },
  createBtnText: {
    color: 'white',
    fontSize: 16
  }
});