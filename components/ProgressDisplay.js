//create react native app
import React, { Component, useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

const ProgressDisplay = () => {

  return (
    <View style={styles.container}>
      <Text>Progress Display</Text>
    </View>
  );
};

export default ProgressDisplay;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "blue",
  },
});
