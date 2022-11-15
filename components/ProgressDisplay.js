//create react native app
import React, { Component, useEffect, useState } from "react";
import { View, Text, StyleSheet, Dimensions, TouchableOpacity } from "react-native";
import { GestureDetector, Gesture } from "react-native-gesture-handler";
import Animated, {
  Extrapolate,
  interpolate,
  useAnimatedStyle,
  useSharedValue,
  withSpring,
  withTiming,
} from "react-native-reanimated";

const { height: SCREEN_HEIGHT } = Dimensions.get("window");
const MAX_TRANSLATE_Y = -SCREEN_HEIGHT * 0.9;

const ProgressDisplay = () => {
  const translateY = useSharedValue(0);

  const context = useSharedValue({ y: 0 });

  const My_gesture = Gesture.Pan()
    .onStart(() => {
      context.value = { y: translateY.value };
    })
    .onUpdate((event) => {
      translateY.value = event.translationY + context.value.y;
      //set maximum translateY value
      translateY.value = Math.max(translateY.value, MAX_TRANSLATE_Y);
    })
    .onEnd(() => {
      if (translateY.value > -SCREEN_HEIGHT/4) {
        console.log("condition met")
        translateY.value = withSpring(-25, { damping: 50 });
      } else if (translateY.value < -SCREEN_HEIGHT/2){
        console.log("condition met2")
        translateY.value = withSpring(MAX_TRANSLATE_Y, { damping: 50 });
      }
    });

  useEffect(() => {
    translateY.value = withSpring(-SCREEN_HEIGHT / 5, { damping: 50 });
  }, []);

  const rBottomSheetStyle = useAnimatedStyle(() => {
    const borderRadius = interpolate(
      translateY.value,
      [MAX_TRANSLATE_Y + 50, MAX_TRANSLATE_Y],
      [25, 5],
      Extrapolate.CLAMP
    );

    return {
      borderRadius,
      transform: [{ translateY: translateY.value }],
    };
  });

  return (
    <GestureDetector gesture={Gesture.Exclusive(My_gesture)}>
      <Animated.View style={[styles.container, rBottomSheetStyle]}>
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
    top: SCREEN_HEIGHT,
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
