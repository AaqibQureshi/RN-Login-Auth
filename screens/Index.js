import React from "react";
import { StyleSheet, View, TextInput } from "react-native";

const Index = (props) => {
  return (
    <View style={styles.inputView}>
      <TextInput
        keyboardType={props.keyboardType}
        style={styles.inputText}
        placeholder={props.placeholder}
        placeholderTextColor={props.placeholderTextColor}
        onChangeText={props.onChangeText}
      />
    </View>
  );
};
export default Index;
const styles = StyleSheet.create({
  inputView: {
    width: "80%",
    backgroundColor: "#465881",
    borderRadius: 25,
    height: 60,
    marginBottom: 20,
    justifyContent: "center",
    padding: 15,
  },
  inputText: {
    height: 60,
    color: "white",
    fontSize: 20,
  },
});
