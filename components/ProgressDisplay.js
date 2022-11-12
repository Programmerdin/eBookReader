//create react native app
import React, { Component, useState } from "react";
import { View, Text, StyleSheet, Dimensions, TouchableOpacity } from "react-native";
import { GestureDetector, Gesture } from "react-native-gesture-handler";
import Animated from 'react-native-reanimated';

const { height: SCREEN_HEIGHT } = Dimensions.get("window");

const ProgressDisplay = () => {
  

  const My_gesture = Gesture.Tap().maxDuration(250).onStart(()=>{
    console.log("tap started");
  })
  return (
    <GestureDetector gesture={Gesture.Exclusive(My_gesture)}>
      <Animated.View style={styles.container}>
        <View style={styles.line}></View>
      </Animated.View>
    </GestureDetector>
  );
};

export default ProgressDisplay;

const styles = StyleSheet.create({
  container: {
    height: SCREEN_HEIGHT,
    width: "100%",
    backgroundColor: "white",
    position: "absolute",
    top: SCREEN_HEIGHT / 1.5,
    borderRadius: 25,
  },
  line: {
    height: 5,
    width: "30%",
    backgroundColor: "grey",
    alignSelf: "center",
    marginVertical: 15,
    borderRadius: 2,
  },
  text: {
    color: "white",
  },
});
