//create react native app
import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";
import Menu from "./Menu";
import TextDisplay from "./TextDisplay";

const Combined = () => {

  return (
    <View style={styles.container}>
      <Menu />
      <TextDisplay />
    </View>
  );
};

export default Combined;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
