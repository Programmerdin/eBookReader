// import * as React from 'react';
// import { View, StyleSheet, useWindowDimensions } from 'react-native';
// import HTML from 'react-native-render-html';
// import part0007_split_008 from './book/test/text/part0007_split_008.html';

// const CONTENT = part0007_split_008;
// const CONTENT1 = part0007_split_008;

// export default function App() {
//   const { width, height } = useWindowDimensions();
//   const contentWidth = useWindowDimensions().width;
//   return (
//     <View style={styles.container}>
//       <HTML source={{ html: CONTENT }} contentWidth={contentWidth} />
//       <HTML source={{ html: CONTENT1 }} contentWidth={contentWidth} />
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     padding: 16,
//     paddingTop: 100,
//   },
// });

import React from 'react';
import { StyleSheet, Text, SafeAreaView, ScrollView, StatusBar } from 'react-native';

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView} >
        <Text style={styles.text}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </Text>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: StatusBar.currentHeight,
  },
  scrollView: {
    backgroundColor: 'pink',
    marginHorizontal: 20,
    showsVerticalScrollIndicator: false,
  },
  text: {
    fontSize: 42,
  },
});

export default App;