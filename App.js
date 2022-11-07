//create react native app
import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";
//import C:\Users\testi\Desktop\Local Coding\eBookReader\my-app\book\test\text\part0004_split_010.html
import part0004_split_010 from "./book/test/text/part0004_split_010.html";

const App = () => {
  const part = part0004_split_010;
  console.log(part);
  return (
    <View style={styles.container}>
      <Text>Hello World</Text>
      <Text>{part}</Text>
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
