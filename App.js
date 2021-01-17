import * as React from "react";
import {View, Text, StyleSheet, TouchableWithoutFeedback } from "react-native";

const styles = StyleSheet.create({
  container: {
    marginTop: 400,
    
  },
  bright:{
    color: '#dc143c',
    fontWeight: 'bold',
    fontSize: 30,
    backgroundColor: 'lightskyblue',
  },
 
});
export default function App() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    
    >

      <Text style={styles.bright}>Universal React with Expo</Text>
    </View>
  );
}
