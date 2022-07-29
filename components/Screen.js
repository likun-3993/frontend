import React from "react";
import { StyleSheet,View } from "react-native";

function Screen(props) {
  return <View style={[styles.screen,props.style]}>
      {props.children}
      </View>;
}

const styles = StyleSheet.create({
  screen: {
    marginTop:30,
    flex: 1,
  },
});

export default Screen;
