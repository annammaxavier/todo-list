import React from "react";
import { View, StyleSheet } from "react-native";

const MainLayout = ({ children }) => {
  return (
    <View style={styles.container}>
      {/* This component should NOT include NavigationContainer */}
      {children}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: "#f8f9fa",
  },
});

export default MainLayout;
