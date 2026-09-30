import React from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from "react-native";

import Person from "./Person";
import Project from "./project";

export default function MainScreen() {
  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={styles.content}
      showsVerticalScrollIndicator={false}
    >
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.backArrow}>‹</Text>
        <Text style={styles.headerTitle}>App</Text>
      </View>

      {/* Person */}
      <Person />

      {/* Projects */}
      <View style={styles.projectsSection}>
        <View style={styles.projectsHeader}>
          <Text style={styles.projectsTitle}>PROJECTS</Text>

          <TouchableOpacity style={styles.viewAllButton}>
            <Text style={styles.viewAllText}>View All</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.projectsContainer}>
          <Project
            image="https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=500&q=80"
          />

          <Project
            image="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=500&q=80"
          />
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#111111",
  },

  content: {
    backgroundColor: "#FFFCE6",
    minHeight: "100%",
  },

  header: {
    height: 75,
    backgroundColor: "#FFFCE6",
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 25,
  },

  backArrow: {
    fontSize: 40,
    color: "#222",
    marginRight: 40,
    marginTop: -5,
  },

  headerTitle: {
    fontSize: 24,
    fontWeight: "600",
    color: "#222",
  },

  projectsSection: {
    paddingHorizontal: 25,
    paddingTop: 20,
    paddingBottom: 40,
  },

  projectsHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 20,
  },

  projectsTitle: {
    fontSize: 20,
    fontWeight: "700",
    color: "#222",
  },

  viewAllButton: {
    backgroundColor: "#FFD200",
    paddingVertical: 10,
    paddingHorizontal: 18,
    borderRadius: 25,
  },

  viewAllText: {
    color: "#FFFFFF",
    fontSize: 14,
    fontWeight: "600",
  },

  projectsContainer: {
    flexDirection: "row",
    gap: 35,
  },
});
