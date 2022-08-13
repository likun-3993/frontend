import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import Hyperlink from "react-native-hyperlink";

const AppButton = ({ title, style, onPress, external, pay }) => {
  return (
    <TouchableOpacity onPress={onPress}>
      {!pay && (
        <View style={[styles.button, style]}>
          <Text style={[{ color: "white" }, external]}>{title}</Text>
        </View>
      )}
      {pay && (
        <View style={[styles.button, style]}>
          <Hyperlink
            linkDefault
            linkStyle={{ color: "#fff", fontSize: 16 }}
            linkText={(url) =>
              url === "https://tribe-backend-app-node.herokuapp.com"
                ? `${title}`
                : url
            }
          >
            <Text style={styles.sectionDescription}>
              https://tribe-backend-app-node.herokuapp.com
            </Text>
          </Hyperlink>
        </View>
      )}
    </TouchableOpacity>
  );
};

export default AppButton;

const styles = StyleSheet.create({
  button: {
    width: "100%",
    backgroundColor: "blue",
    padding: 10,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 20,
  },
});
