// imports
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import GenericImage from './components/atoms/Image';
import GenericContainer from './components/atoms/Container';

// component function
export default function App() {
  return (
    <View style={styles.container}>
      <GenericImage/>
      <GenericContainer>
        <h1>
          Hello World!  
        </h1> 
      </GenericContainer>
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

// component styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
