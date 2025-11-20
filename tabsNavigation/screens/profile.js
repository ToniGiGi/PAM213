import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

import { Ionicons } from '@expo/vector-icons'; 


export default function Profile({ navigation }) {
  return (
    <View style={styles.container}>

      <Text style={styles.title}>Perfil usuario</Text>

      <TouchableOpacity 
        style={styles.button}
        onPress={() => navigation.navigate('Detalle')}
      >
        <Text style={styles.buttonText}>Detalles de Usuario</Text>
      </TouchableOpacity>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    color: 'green',
    marginBottom: 20, 
  },
  button: {
    backgroundColor: '#007BFF', 
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 10,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
  },
});