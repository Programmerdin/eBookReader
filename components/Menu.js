//create react native app
import React, { Component, useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

const Menu = () => {
  //when user swipes right to left the menu will appear
  //when user swipes left to right the menu will disappear

  //font size
  //font color
  //inner_screen background color
  //inner_screen width

  //most of the states will change style in TextDisplay.js and ProgressDisplay.js
  const [fontSize, setFontSize] = useState(20);
  const [fontColor, setFontColor] = useState("black");
  //background color changes background color of Combined.js
  const [BackgroundColor, setBackgroundColor] = useState("white");
  const [innerScreen_width, setInnerScreen_width] = useState(90);

  return (
    <View style={styles.container}>
      <Text>Menu</Text>
      <Text>Font Size: {fontSize}</Text>
      <Text>Font Color: {fontColor}</Text>

      {/* increase fontSize by 1 every time touchable opacity is pressed */}
      <TouchableOpacity onPress={() => setFontSize(fontSize + 1)}>
        <Text>increase font size</Text>
      </TouchableOpacity>

      {/* decrease fontSize by 1 every time touchable opacity is pressed */}
      <TouchableOpacity onPress={() => setFontSize(fontSize - 1)}>
        <Text>Decrease font size</Text>
      </TouchableOpacity>
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
