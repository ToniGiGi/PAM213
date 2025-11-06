//simulacion de pantalla "Mi galeria" coon 6 fotos con descripcion de cada una 

import React, { useState } from 'react';
import {View,Text,TextInput,TouchableOpacity,StyleSheet,Alert,Switch,ImageBackground,Image,ActivityIndicator,StatusBar 
} from 'react-native';
import { ScrollView } from 'react-native-web';


const IMAGE_1 = require('../assets/pomofy.png');


export default function ScreenPrincipal() {
  return (
    <View style={styles.container}>
      <Text style={styles.texto}>MI GALERIA</Text>
             <ImageBackground
              source={require('../assets/background.jpg')} 
              resizeMode="cover"
              style={styles.foto2}
            ></ImageBackground>
                <View style={styles.descripcion}>
            <Text style={styles.texto2}>Esta foto fue tomada de google, realmente no tiene mucho que hacer o decir al respecto</Text>
      </View>
    </View>
  );
}





const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'left',
    alignItems: 'center',
    backgroundColor: '#fafafa',
  },
  texto: {
    color: '#333',
    fontWeight: 'bold',
  },
  Descripcion: {
    flex: 2,
    justifyContent: 'down',
    alignItems: 'center',
    backgroundColor: '#30a3ddff',
  },
  foto2: {
    flexDirection: 'left',
    alignItems: 'center',
    gap: 10,
  },
  
});