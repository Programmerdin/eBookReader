//create react native app
import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";
import Combined from "./components/Combined";

const App = () => {

  return (
    <View style={styles.container}>
      <Combined />
    </View>
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
