import { StyleSheet, View } from "react-native";
import React from "react";
import AppText from "./AppText";
import AppTextInput from "./Basics/AppTextInput";

const NamedInput = ({ heading, ...props }) => {
  return (
    <View style={styles.container}>
      <AppText style={styles.text}>{heading}</AppText>
      <AppTextInput
        {...props}
        style={{ borderBottomWidth: 1 }}
        text={{ color: "black" }}
      />
    </View>
  );
};

export default NamedInput;

const styles = StyleSheet.create({
  container: {
    alignItems: "flex-start",
    // padding:2,
  },
  text: {
    color: "#73777B"
    // color: "black",
  },
});
