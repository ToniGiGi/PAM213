
//1. Imports, zona de importaciones OBLIGATORIAS
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';
import React, { use, useState } from 'react';


//2. Main, Zona de componentes OBLIGATORIAS
export default function App() {
  
  const [contador, setcontador]=useState(0);



  return (

    <View style={styles.container}>
      <Text style={styles.texto} >Contador:</Text>
      <Text style={styles.texto2} >{contador} </Text> 

      <View style={styles.botonesContainer}>

      <Button title="Agregar" onPress={()=>setcontador(contador+1)} color='#80fb73ff'/>
      <Button title="Restar" onPress={()=>setcontador(contador-1)} color='#ed6a6aff' />
      <Button title="Reiniciar" onPress={()=>setcontador(0)} color='#6da2ffff'/>

      </View>

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
  }, //Llave del container ------------
  texto:{
    color:'#6d6d6dff',
    fontSice: 30,
    fontFamily: 'Times New Roman',
    fontWeight: 'bold',    
    FontStyle: 'italic',
    textDecorationLine: 'underLine',
  },
  texto2:{
    color:'#f46b6bff',
    fontSice: 30,
    fontFamily: 'Times New Roman',
    fontWeight: 'bold',    
    FontStyle: 'italic',
  
  },

  botonesContainer:{
    marginTop: 15,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 25,
  },



});
