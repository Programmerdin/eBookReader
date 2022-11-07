//create react native app
import React, { Component, useState } from "react";
import { View, Text, StyleSheet } from "react-native";


const Menu = () => {
  //when user swipes right to left the menu will appear
  //when user swipes left to right the menu will disappear

  //font size
  //font color
  //outer_screen background color
  //inner_screen background color
  //inner_screen width
  const [fontSize, setFontSize] = useState(20);
  const [fontColor, setFontColor] = useState("black");
  const [outerScreen_backgroundColor, setOuterScreen_backgroundColor] = useState("black");
  const [innerScreen_backgroundColor, setInnerScreen_backgroundColor] = useState("white");
  const [innerScreen_width, setInnerScreen_width] = useState(90);

  return (
    <View style={styles.container}>
      <Text>Menu</Text>
    </View>
  );
};

export default Menu;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    opacity: 0.5,
    backgroundColor: "green",
  },
});
