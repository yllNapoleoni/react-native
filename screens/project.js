import React from "react";
import {
  View,
  Image,
  StyleSheet,
} from "react-native";

export default function Project({ image }) {
  return (
    <View style={styles.container}>
      <Image
        source={{ uri: image }}
        style={styles.image}
        resizeMode="cover"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: 177,
    height: 180,
    borderRadius: 12,
    overflow: "hidden",
    backgroundColor: "#DDDDDD",
  },

  image: {
    width: "100%",
    height: "100%",
  },
});
