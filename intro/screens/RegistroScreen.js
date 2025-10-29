//Exportacion de la pantalla de registro de usuario, aqui ponemos todo lo necesario para que el usuario pueda registrarse en la app

import React, { useState } from 'react';
import {View,Text,TextInput,TouchableOpacity,StyleSheet,Alert,Switch,ImageBackground,Image,ActivityIndicator,StatusBar 
} from 'react-native';

// Estos son los componentes de la pantalla de registro
const RegistroScreen = () => {
  const [nombre, setNombre] = useState('');
  const [email, setEmail] = useState('');
  const [aceptaTerminos, setAceptaTerminos] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  // Esta funcion es para manejar el registro con una funcion flecha
  const handleRegistro = () => {
    const nombreLimpio = nombre.trim();
    const emailLimpio = email.trim();

    // Los if para validar los campos del formulario
    if (!nombreLimpio && !emailLimpio) {
      Alert.alert("Error", "Todos los campos están vacíos");
      return; 
    }
    if (!nombreLimpio) {
      Alert.alert("Error", "No ingresaste nombre");
      return;
    }
    if (!emailLimpio) {
      Alert.alert("Error", "No ingresaste correo electrónico");
      return;
    }
    const emailRegex = /\S+@\S+\.\S+/;
    if (!emailRegex.test(emailLimpio)) {
      Alert.alert("Error", "El formato del correo no es válido");
      return;
    }
    if (!aceptaTerminos) {
      Alert.alert("Error", "Debes aceptar los términos y condiciones");
      return;
    }  

    // Simulacion de proceso de registro
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
  
    // Alerta de exito
      Alert.alert(
        "¡Registro Exitoso!",
        `Nombre: ${nombreLimpio}\nCorreo: ${emailLimpio}`, 
        [{ text: "OK" }]
      );

      // Esto me sirve pra limpiar los campos despues del registro
      setNombre('');
      setEmail('');
      setAceptaTerminos(false);
    }, 2000);
  };

// Retorno del componente RegistroScreen
  return (
    <View style={styles.container}>
      <StatusBar 
        barStyle="light-content" 
        backgroundColor="transparent" 
        translucent={true} 
      />
      <ImageBackground
        source={require('../assets/background.jpg')} 
        resizeMode="cover"
        style={styles.fondo}
      >
        <View style={styles.formularioContenedor}>   
          <Image
            source={require('../assets/icon.png')}
            style={styles.logo}
            resizeMode="contain"
          />
          <TextInput
            style={styles.input}
            placeholder="Nombre completo"
            placeholderTextColor="#888"
            value={nombre}
            onChangeText={setNombre}
          />
          <TextInput
            style={styles.input}
            placeholder="Correo electrónico"
            placeholderTextColor="#888"
            value={email}
            onChangeText={setEmail}
            keyboardType="email-address"
            autoCapitalize="none"
          />
          <View style={styles.switchContenedor}>
            <Text style={styles.switchTexto}>Acepto términos y condiciones</Text>
            <Switch
              onValueChange={setAceptaTerminos}
              value={aceptaTerminos}
            />
          </View>
          <TouchableOpacity
            style={styles.boton}
            onPress={handleRegistro}
            disabled={isLoading}
          >
            {isLoading ? (
              <ActivityIndicator size="small" color="#ffffff" />
            ) : (
              <Text style={styles.botonTexto}>Registrarse</Text>
            )}
          </TouchableOpacity>
          
        </View>
      </ImageBackground>
    </View>
  );
}

// Estilos para la pantalla de registro
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  fondo: {
    flex: 1,
    justifyContent: 'center', 
    alignItems: 'center',
  },
  formularioContenedor: {
    width: '90%', 
    padding: 20,
    backgroundColor: 'rgba(255, 255, 255, 0.7)', 
    borderRadius: 10,
    alignItems: 'center',
  },
  logo: {
    width: 100,
    height: 100,
    marginBottom: 20,
  },
  input: {
    width: '100%',
    height: 50,
    backgroundColor: '#ffffff', 
    borderRadius: 8,
    paddingHorizontal: 15,
    marginBottom: 15,
    fontSize: 16,
    borderWidth: 1,
    borderColor: '#ddd',
  },
  switchContenedor: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
    marginBottom: 20,
  },
  switchTexto: {
    fontSize: 14,
    color: '#333', 
  },
  boton: {
    width: '100%',
    height: 50,
    backgroundColor: '#007BFF',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
  },
  botonTexto: {
    color: '#ffffff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default RegistroScreen;