//create react native app
import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";
import { StatusBar } from 'expo-status-bar';
import Menu from "./Menu";
import TextDisplay from "./TextDisplay";
import ProgressDisplay from "./ProgressDisplay";


const Combined = () => {
  return (
    <View style={styles.container}>
      <StatusBar hidden={true} style="auto" />
      <View style={styles.Menu_container}>
        <Menu />
      </View>

      <View style={styles.TextDisplay_container}>
        <TextDisplay />
      </View>
      <View style={styles.ProgressDisplay_container}>
        <ProgressDisplay />
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
    width: "100%",
    backgroundColor: "white",
  },
  Menu_container: {
    height: 100,
  },
  TextDisplay_container: {
    flex: 1,
  },
  ProgressDisplay_container: {
    height: 50,
  },

});
