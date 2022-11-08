//create react native app
import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";
import Menu from "./Menu";
import TextDisplay from "./TextDisplay";

const Combined = () => {
  return (
    <View style={styles.container}>
      <View style={styles.Menu_container}>
        <Menu />
      </View>

      <View style={styles.TextDisplay_container}>
        <TextDisplay />
      </View>
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
  Menu_container: {
    flex: 1,
  },
  TextDisplay_container: {
    flex: 1,
  },

});
