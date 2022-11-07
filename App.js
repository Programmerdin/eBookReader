//create react native app
import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";
import HTMLparser from "./components/HTMLparser";

const App = () => {

  return (
    <View style={styles.container}>
      <HTMLparser />
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
