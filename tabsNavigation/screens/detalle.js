import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function Detalle() {
  return (
    <View style={styles.container}>
      <Text style={styles.textBlack}>Detalles Usuario</Text>
      <Text style={styles.textBlue}>Usando Navegacion Stack</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff', // Fondo grisáceo claro como en la imagen
    justifyContent: 'center',
    alignItems: 'center',
  },
  textBlack: {
    fontSize: 20,
    color: '#000',
    marginBottom: 5,
  },
  textBlue: {
    fontSize: 18,
    color: 'blue', // O un azul marino oscuro '#000080'
    fontWeight: 'bold',
  },
});