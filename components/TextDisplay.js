//create react native app
import React, { Component, useState } from "react";
import { View, Text, StyleSheet } from "react-native";
//import C:\Users\testi\Desktop\Local Coding\eBookReader\my-app\book\test\text\part0004_split_010.html
import part0004_split_010 from "../book/test/text/part0004_split_010.html";

const TextDisplay = () => {
  const part = part0004_split_010;

  //set up useState
  const [fontSize, setFontSize] = useState(20);
  const [fontColor, setFontColor] = useState("black");
  const [outerScreen_backgroundColor, setOuterScreen_backgroundColor] = useState("black");
  const [innerScreen_backgroundColor, setInnerScreen_backgroundColor] = useState("white");

  //font size
  //font color
  //outer_screen background color
  //inner_screen background color
  //inner_screen width

  return (
    <View style={styles.container}>
      <View style={styles.outer_screen}>
        <View style={styles.inner_screen}>
          <Text style={styles.text_style}>{part}</Text>
        </View>
      </View>
    </View>
  );
};

export default TextDisplay;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderColor:"red",
    borderWidth: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  outer_screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "black",
    width: "100%",
    height: "100%",
  },
  inner_screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
    width: "90%",
    height: "90%",
  },
  text_style: {
    fontSize: 20,
    color: "black",
  },
});
