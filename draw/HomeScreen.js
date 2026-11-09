
import React from 'react';
import {
  View,
  Image,
  StyleSheet,
} from 'react-native';

export default function HomeScreen() {
  return (
    <View style={styles.container}>

      <Image
        source={require('laptop.png')}
        style={styles.image}
        resizeMode="cover"
      />

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    padding: 20,
  },

  image: {
    width: '100%',
    height: 235,
    borderRadius: 12,
  },
});
