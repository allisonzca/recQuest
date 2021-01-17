import * as React from "react";
import {View, Text, StyleSheet, TouchableWithoutFeedback } from "react-native";
import Login from "./components/Login"

const styles = StyleSheet.create({
  container: {
    marginTop: 400,
  }, 
});
export default function App() {
  return (
    <View style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}    
    >

      <Login/>

    
    </View>
  );
}
