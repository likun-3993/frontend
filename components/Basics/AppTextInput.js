import React from "react";
import { StyleSheet, TextInput, View } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

function AppTextInput({ icon, size, style, text, ...props }) {
  return (
    <View style={[styles.input, style]}>
      <MaterialCommunityIcons name={icon} size={size} />
      <View style={styles.text}>
        <TextInput
          style={[styles.new, text]}
          placeholderTextColor="#F6FBF4"
          {...props}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    flexDirection: "row",
    width: "100%",
    marginVertical: 15,
    padding: 5,
  },
  text: {
    flex: 1,
    padding: 4,
  },
  new: {
    fontSize: 15,
    color: "white",
  },
});
export default AppTextInput;
