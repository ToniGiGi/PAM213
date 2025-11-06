import React, { useState } from 'react';
import {View,Text,TextInput,TouchableOpacity,StyleSheet,Alert,Switch,ImageBackground,Image,ActivityIndicator,StatusBar 
} from 'react-native';
import { ScrollView } from 'react-native-web';


const IMAGE_1 = require('../assets/pomofy.png');


export default function ScreenPrincipal() {
  return (
    <View style={styles.container}>
      <Text style={styles.texto}>MI GALERIA</Text>




      
    </View>

   
  );

}



//agregar 6 fotografias en la app





const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'left',
    alignItems: 'center',
    backgroundColor: '#fafafa',
  },
  texto: {
    fontSize: 18,
    color: '#333',
    fontWeight: 'bold',
  },
  
});