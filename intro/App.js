
//1. Imports, zona de importaciones OBLIGATORIAS
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';
import React, { use, useState } from 'react';


//2. Main, Zona de componentes OBLIGATORIAS
export default function App() {
  
  const [contador, setcontador]=useState(0);



  return (

    <View style={styles.container}>

      <Text>Contador:  {contador} </Text> {/* Soy un comentario */}
      
      <Button title="Agregar" onPress={()=>setcontador(contador+1)} color='#1ee708ff'/>
      <Button title="Restar" onPress={()=>setcontador(contador-1)} color='#c42d2dff' />
      <Button title="Reiniciar" onPress={()=>setcontador(0)}/>


      <StatusBar style="auto" />

    </View>
  );  
}

//3. Estilos, zona de estetica ESTO NO ES OBLIGATORIO
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffffff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
