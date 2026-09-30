import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
} from "react-native";

export default function Person() {
  return (
    <View style={styles.container}>

      {/* Blue background */}
      <View style={styles.blueArea}>

        {/* Person illustration */}
        <View style={styles.person}>

          {/* Hair */}
          <View style={styles.hair} />

          {/* Face */}
          <View style={styles.face}>

            {/* Eyes */}
            <View style={[styles.eye, styles.leftEye]} />
            <View style={[styles.eye, styles.rightEye]} />

            {/* Mustache */}
            <View style={styles.mustache} />

          </View>

          {/* Beard */}
          <View style={styles.beard} />

          {/* Headphones */}
          <View style={[styles.headphone, styles.leftHeadphone]} />
          <View style={[styles.headphone, styles.rightHeadphone]} />

          {/* Headphone bands */}
          <View style={styles.headphoneBand} />

          {/* Body */}
          <View style={styles.body} />

          {/* Arms */}
          <View style={[styles.arm, styles.leftArm]} />
          <View style={[styles.arm, styles.rightArm]} />

        </View>
      </View>

      {/* Information card */}
      <View style={styles.card}>

        <Text style={styles.name}>JOHN DOE</Text>

        <Text style={styles.job}>
          UI/UX Designer
        </Text>

        <Text style={styles.description}>
          We're passionate about creating{"\n"}
          beautiful desing for startups & leading{"\n"}
          brands
        </Text>

        <TouchableOpacity style={styles.hireButton}>
          <Text style={styles.hireText}>
            HIRE HIM
          </Text>
        </TouchableOpacity>

      </View>
    </View>
  );
}

const styles = StyleSheet.create({

  container: {
    backgroundColor: "#FFFCE6",
  },

  blueArea: {
    height: 330,
    backgroundColor: "#86C6CA",
    borderBottomLeftRadius: 35,
    borderBottomRightRadius: 35,
    overflow: "hidden",
    position: "relative",
  },

  person: {
    width: 260,
    height: 300,
    position: "absolute",
    bottom: -5,
    alignSelf: "center",
  },

  /* Body */

  body: {
    position: "absolute",
    width: 150,
    height: 100,
    backgroundColor: "#F5BD66",
    bottom: -30,
    left: 55,
    borderTopLeftRadius: 80,
    borderTopRightRadius: 80,
  },

  /* Arms */

  arm: {
    position: "absolute",
    width: 35,
    height: 130,
    backgroundColor: "#F5BD66",
    borderRadius: 30,
    bottom: 15,
  },

  leftArm: {
    left: 20,
    transform: [{ rotate: "28deg" }],
  },

  rightArm: {
    right: 20,
    transform: [{ rotate: "-28deg" }],
  },

  /* Face */

  face: {
    position: "absolute",
    width: 110,
    height: 135,
    backgroundColor: "#FFC76D",
    borderRadius: 55,
    left: 75,
    top: 65,
    zIndex: 3,
  },

  /* Hair */

  hair: {
    position: "absolute",
    width: 125,
    height: 75,
    backgroundColor: "#64191B",
    borderTopLeftRadius: 65,
    borderTopRightRadius: 50,
    borderBottomRightRadius: 25,
    left: 68,
    top: 43,
    zIndex: 5,
    transform: [{ rotate: "-5deg" }],
  },

  /* Beard */

  beard: {
    position: "absolute",
    width: 90,
    height: 100,
    backgroundColor: "#713035",
    left: 85,
    top: 145,
    borderBottomLeftRadius: 45,
    borderBottomRightRadius: 45,
    zIndex: 2,
  },

  /* Eyes */

  eye: {
    position: "absolute",
    width: 20,
    height: 5,
    backgroundColor: "#481719",
    borderRadius: 10,
    top: 47,
  },

  leftEye: {
    left: 23,
  },

  rightEye: {
    right: 23,
  },

  /* Mustache */

  mustache: {
    position: "absolute",
    width: 42,
    height: 15,
    backgroundColor: "#4B1517",
    left: 34,
    top: 76,
    borderRadius: 15,
  },

  /* Headphones */

  headphone: {
    position: "absolute",
    width: 22,
    height: 90,
    backgroundColor: "#272727",
    borderRadius: 8,
    top: 92,
    zIndex: 6,
  },

  leftHeadphone: {
    left: 60,
  },

  rightHeadphone: {
    right: 60,
  },

  headphoneBand: {
    position: "absolute",
    width: 135,
    height: 135,
    borderWidth: 7,
    borderColor: "#EAEAEA",
    borderBottomWidth: 0,
    borderRadius: 70,
    left: 63,
    top: 52,
    zIndex: 1,
  },

  /* Card */

  card: {
    width: "80%",
    backgroundColor: "#FFFCE6",
    borderWidth: 1,
    borderColor: "#F0E5B8",
    borderRadius: 22,
    alignSelf: "center",
    marginTop: -35,
    paddingVertical: 27,
    paddingHorizontal: 15,
    alignItems: "center",
    zIndex: 10,
  },

  name: {
    fontSize: 21,
    fontWeight: "700",
    color: "#181818",
    marginBottom: 5,
  },

  job: {
    fontSize: 16,
    color: "#555555",
    marginBottom: 8,
  },

  description: {
    fontSize: 15,
    lineHeight: 21,
    textAlign: "center",
    color: "#333333",
    marginBottom: 16,
  },

  hireButton: {
    backgroundColor: "#FFD200",
    paddingVertical: 13,
    paddingHorizontal: 25,
    borderRadius: 30,
  },

  hireText: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "700",
  },
});
