import React, { useState } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import ContadorScreen from './ContadorScreen';
import BotonesScreen from './BotonesScreen';
import TextScreen from './TextScreen';
import ImageBackScreen from './ImageBackScreen';
import ScrollViewScreen from './ScrollViewScreen';
import ActivityScreen from './ActivityScreen';
import FatListScreen from './FatListScreen';
import ModalScreen from './ModalScreen';
import ButtonShetScreen from './ButtonShetScreen';
import RegistroScreen from './RegistroScreen';
import SectionList from './SectionList';

export default function MenuScreen() {
  const [screen, setScreen] = useState('menu');

  switch (screen) {
    case 'contador':
      return <ContadorScreen />;
    case 'botones':
      return <BotonesScreen />;
    case 'text':
      return <TextScreen />;
    case 'imageback':
      return <ImageBackScreen />;
    case 'scrollview':
      return <ScrollViewScreen />;
    case 'activity':
      return <ActivityScreen />;
    case 'fatlist':
      return <FatListScreen />;
    case 'modal':
      return <ModalScreen />;
    case 'buttonshet':
      return <ButtonShetScreen />;
    case 'RegistroScreen':
      return <RegistroScreen />;
      case 'sectionlist':
      return <SectionList />;
    default:
      return (
        <View style={styles.botonesContainer}>
          <Text style={styles.menuTitle}>Menú de prácticas</Text>
          <Button title="Pract: Contador" onPress={() => setScreen('contador')} />
          <Button title="Pract: Botones" onPress={() => setScreen('botones')} />
            <Button title="Pract: Text" onPress={() => setScreen('text')} />
            <Button title="Pract: ImageBack" onPress={() => setScreen('imageback')} />
            <Button title="Pract: ScrollView" onPress={() => setScreen('scrollview')} />
            <Button title="Pract: Activity" onPress={() => setScreen('activity')} />
            <Button title="Pract: FatList" onPress={() => setScreen('fatlist')} />
            <Button title="Pract: Modal" onPress={() => setScreen('modal')} />
            <Button title="Pract: ButtonShet" onPress={() => setScreen('buttonshet')} />
            <Button title="Pract: RegistroScreen" onPress={() => setScreen('RegistroScreen')} />
            <Button title="Pract: SectionList" onPress={() => setScreen('sectionlist')} />
        </View>
      );
  }
}

const styles = StyleSheet.create({
  botonesContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 5,
    marginBottom: 10,
    marginLeft: 8,
    marginRight: 8,
    borderRadius: 8,
    borderColor: '#7bd1ff',
    borderWidth: 2,
    backgroundColor: '#36434f',
    gap: 8,
  },
  menuTitle: {
    fontSize: 15,
    fontWeight: 'bold',
    marginBottom: 15,
    color: '#7bd1ff',
  },
});
