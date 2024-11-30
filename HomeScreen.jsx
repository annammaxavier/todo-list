import React from "react";
import { Button, View, StyleSheet } from "react-native";
import MainLayout from "../layouts/MainLayout";

const HomeScreen = ({ navigation }) => {
  return (
   <MainLayout>
      <View style={styles.container}>
        <Button
          title="Go to About Screen"
          onPress={() => navigation.navigate("About")}
        />
      </View>
      </MainLayout>

  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default HomeScreen;




