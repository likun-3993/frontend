import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React, { useState } from "react";
import AppText from "./AppText";

const BulletList = ({ title }) => {
  return (
    <View style={styles.bulletList}>
      <TouchableOpacity >
        <View style={styles.circle} />
      </TouchableOpacity>
        <AppText style={{ fontSize: 12 }}>{title}</AppText>
    </View>
  );
};

const styles = StyleSheet.create({
  bulletList: {
    flexDirection: "row",
    alignItems: 'center',
    justifyContent: 'center',
    marginRight:2,
    marginVertical:5
  },
  circle: {
    borderRadius: 8,
    height: 13,
    width: 13,
    borderWidth: 0.3,
  },
});
export default BulletList;
