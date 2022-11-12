//create react native app
import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import Combined from "./components/Combined";

const App = () => {

  return (
    <GestureHandlerRootView style={styles.container}>
      <Combined />
    </GestureHandlerRootView>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
