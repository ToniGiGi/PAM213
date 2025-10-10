
//1. Imports, zona de importaciones OBLIGATORIAS
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';
import ContadorScreen from './screens/ContadorScreen';

//2. Main, Zona de componentes OBLIGATORIAS
export default function App() {
  
  
  return (

    <ContadorScreen></ContadorScreen>

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
