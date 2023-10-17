import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const App = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Hello, World!</Text>
      <Image
        source={require('./image/test.jpg')} // Replace with the actual image file path
        style={styles.image}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#3498db', // Background color
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white', // Text color
  },
  image: {
    width: 200, // Set the width and height as needed
    height: 200,
  },
});

export default App;
