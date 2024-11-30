import React, { useState } from "react";
import { View, Text, Pressable, StyleSheet } from "react-native";
import MainLayout from "../layouts/MainLayout";

const AboutScreen = () => {
  const [easterEgg, setEasterEgg] = useState(false);

  return (
    <MainLayout>
      <View style={styles.container}>
        <Text>App Name: To-Do List App</Text>
        <Pressable onPress={() => setEasterEgg(!easterEgg)}>
          <Text>Created by: Annamma Xavier</Text>
        </Pressable>
        <Text>Date:{new Date().toLocaleDateString()}</Text>
        {easterEgg && <Text>🎉 You found the Easter Egg! 🎉</Text>}
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

export default AboutScreen;
