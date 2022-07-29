import { StyleSheet, TouchableOpacity, View } from "react-native";
import React from "react";
import AppTextInput from "./Basics/AppTextInput";
import Ionicons from "@expo/vector-icons/Ionicons";

const ValuedInput = ({
  onPress,
  style,
  name = "arrow-down-circle",
  ...props
}) => {
  return (
    <View>
      <TouchableOpacity onPress={onPress}>
        <View style={[styles.main, style]}>
          <AppTextInput {...props} />
          <Ionicons name={name} size={30} color="black" />
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default ValuedInput;

const styles = StyleSheet.create({
  main: {
    width: "80%",
    flexDirection: "row",
    alignItems: "center",
  },
});
