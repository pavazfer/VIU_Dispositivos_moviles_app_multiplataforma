import React, { useEffect } from 'react';
import { View, Text, StyleSheet, ActivityIndicator, Image } from 'react-native';

export default function Splash({ navigation }) {
  useEffect(() => {
    setTimeout(() => {
      // Navigate and then launch the question
      navigation.replace('Eventos');
    }, 2000);
  }, []);

  return (
    <View style={styles.container}>
      {/* Imagen centrada */}
      <View style={styles.imageContainer}>
        <Image
          source={require('../assets/evento.png')}
          style={styles.logo}
          resizeMode="contain"
        />
      </View>

      {/* Texto */}
      <View style={styles.textContainer}>
        <Text style={styles.text}>Aplicación de eventos</Text>
      </View>

      {/* Loading */}
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'black',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageContainer: {
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    width: 200,
    height: 200, 
  },
  textContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: 'white',
    fontSize: 24,
    fontWeight: 'bold',
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
