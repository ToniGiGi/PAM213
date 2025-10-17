import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, Switch } from 'react-native';

export default function BotonesScreen() {
  const [modoOscuro, setModoOscuro] = useState(false);

  const tema = modoOscuro ? styles.darkTheme : styles.lightTheme; 
  const textoTema = modoOscuro ? styles.darkText : styles.lightText; //  operador ternario

  return (
    <View style={[styles.container, tema]}>
      {/* Botones */}
      <Button title="Botón azul" color="#0881acff" onPress={() => {}} />
      <Button title="Botón verde" color="#30a812ff" onPress={() => {}} />
      <Button title="Botón amarillo" color="#cbc105ff" onPress={() => {}} />
      <Button title="Botón rojo" color="#f44336" onPress={() => {}} />
      <Button title="Botón morado" color="#9c27b0" onPress={() => {}} />

      {/* Switch */}
      <View style={styles.section}>
        <Text style={[styles.subtitulo, textoTema]}>Switches</Text>

        <View style={styles.switchRow}>
          <Text style={[styles.switchText, textoTema]}>Modo Oscuro</Text>
          <Switch
            value={modoOscuro}
            onValueChange={() => setModoOscuro(!modoOscuro)}
          />
        </View>
      </View>

      {/* Estado actual */}
      <View style={styles.footer}>
        <Text style={[styles.estadoTexto, textoTema]}>
          {modoOscuro ? 'Modo Oscuro' : 'Modo Claro'}
        </Text>
      </View>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  section: {
    marginTop: 30,
    alignItems: 'center',
  },

  subtitulo: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },

  switchRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },

  switchText: {
    fontSize: 18,
  },

  footer: {
    marginTop: 40,
  },

  estadoTexto: {
    fontSize: 18,
    fontWeight: 'bold',
  },

  lightTheme: {
    backgroundColor: '#fafafa',
  },

  darkTheme: {
    backgroundColor: '#333',
  },

  lightText: {
    color: '#000',
  },

  darkText: {
    color: '#fff',
  },
});
