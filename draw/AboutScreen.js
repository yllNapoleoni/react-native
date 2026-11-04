
import React from 'react';
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';

export default function AboutScreen() {
  return (
    <View style={styles.container}>

      <Text style={styles.title}>
        About Us
      </Text>

      <Text style={styles.description}>
        Welcome to our application!
      </Text>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },

  title: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#374054',
    marginBottom: 15,
  },

  description: {
    fontSize: 16,
    color: '#555555',
  },
});
