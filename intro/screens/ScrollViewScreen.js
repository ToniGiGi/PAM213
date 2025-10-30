import React, { useState } from 'react';
import { View, Text, ScrollView, StyleSheet, Button } from 'react-native';

export default function ScrollViewScreen() {
  const [items, setItems] = useState(["opción 1", "opción 2", "opción 3"]);

  const AgregarOpcion = () => {
    const nuevaOpcion = `opción ${items.length + 1}`;
    setItems([...items, nuevaOpcion]);
  };
  
  const BorrarUltima = () => {
    if (items.length > 3){
    setItems(items.slice(0, items.length - 1));
  } 
  else {
    alert("No se pueden borrar las opciones predeterminadas");
    }
  };

  return (

    <View style={styles.container}>
      <Text style={styles.title}>ScrollView</Text>


      <ScrollView 
      style={styles.scroll}
      contentContainerStyle={styles.content}
      horizontal={true}
      persistentScrollbar={true}
      scrollEnabled={true}
      >

        {items.map((item, index) => (
          <View key={index} style={styles.box}>
            <Text style={styles.itemText}>{item}</Text>
          </View>
        ))}
      </ScrollView>

        <View style={styles.buttonContainer}>
          <Button title="Agregar Opción" color = "#02d9cbd7" onPress={AgregarOpcion} />
          <View style={styles.space}/>
          <Button title="Borrar Última Opción" color = "#35ccbdff" onPress={BorrarUltima} />
        </View>

    
    </View>
  )
}
const styles = StyleSheet.create({
  container: { 
    flex: 1, 
    padding: 20, 
    backgroundColor: '#EEF2FF',
  },
  title: { 
    fontSize: 26, 
    fontWeight: 'bold',
    textAlign: 'center', 
    marginVertical: 15, 
    color: '#2C3E50',
  },
  scroll: { 
    flex: 1, 
    marginBottom: 15, 
    borderRadius: 10,
    backgroundColor: '#F9FAFB',
  },
  content: { 
    paddingVertical: 15, 
    alignItems: 'center',
  },
  box: {
    backgroundColor: '#82B6ED',
    width: '90%',
    padding: 20,
    marginVertical: 10,
    borderRadius: 15,
    elevation: 3,
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowRadius: 5,
  },
  text: { 
    fontSize: 18, 
    color: '#1F2937',
    textAlign: 'center',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 10,
  },
  space: {
    width: 10, // espacio entre botones
    },
});