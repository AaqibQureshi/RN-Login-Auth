import React from "react";
import { StyleSheet, Text, View } from "react-native";

const Posts = (props) => {
  return (
    <View style={styles.container}>
      <Text>Posts</Text>
    </View>
  );
};
export default Posts;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "gray",
    alignItems: "center",
    justifyContent: "center",
  },
});
