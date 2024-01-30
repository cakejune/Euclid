import React from "react";
import { StyleSheet, View } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { SafeAreaView } from "react-native";
import Draggable from "./draggable";
import Box from "./box";
import { GestureHandlerRootView } from "react-native-gesture-handler";

const arr = new Array(25).fill('').map((_, i) => i)

const App = () => {
  return (
    <SafeAreaProvider style={styles.container}>
      <GestureHandlerRootView style={styles.container}>
      <SafeAreaView style={styles.container}>
        <View style={styles.wrapper}>
          {arr.map((item, i) => (
            <Draggable key={item}>
              <Box key={item} count={item} />
            </Draggable>
          ))}
        </View>
      </SafeAreaView>
      </GestureHandlerRootView>
    </SafeAreaProvider>
  );
          };



  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "black",
    },
  wrapper: {
    flexDirection: "row",
    flexWrap: "wrap",
    padding: 16,
  },
});