import React from "react";
import { StyleSheet, TextInput, View } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

function AppTextInput({ icon, size, ...props }) {
  return (
    <View style={styles.input}>
      <MaterialCommunityIcons name={icon} size={size} />
      <View style={styles.text}>
        <TextInput style={styles.new} {...props} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    backgroundColor: "white",
    flexDirection: "row",
    width: "100%",
    padding: 10,
    marginVertical: 5,
  },
  text: {
    flex: 1,
  },
  new: {
    fontSize: 15,
    color: "black",
    borderBottomWidth: 1,
  },
});
export default AppTextInput;
