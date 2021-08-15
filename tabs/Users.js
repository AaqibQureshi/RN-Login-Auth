import React from "react";
import { StyleSheet, Text, View } from "react-native";

const Users = (props) => {
  return (
    <View style={styles.container}>
      <Text>Users</Text>
    </View>
  );
};
export default Users;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "gray",
    alignItems: "center",
    justifyContent: "center",
  },
});
