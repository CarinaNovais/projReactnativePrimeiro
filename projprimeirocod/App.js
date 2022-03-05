import * as React from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';
import Constants from 'expo-constants';

// You can import from local files
import AssetExample from './components/AssetExample';

// or any pure javascript modules available in npm
import { Card } from 'react-native-paper';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.paragraph}>
       Ola mundo, vamos decidir isso hoje!
      </Text>
      <Image style={styles.logo} source={require('./assets/catchuga.jpg')} />
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    textTransform:"uppercase",
    color: 'red',
    textShadowColor: 'green',
    textShadowOffset: {width: -1, height: 1},
    textShadowRadius: 10
  },
   logo: {
    height: 200,
    width: 300,
  }
});
