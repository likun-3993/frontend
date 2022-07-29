import { StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import AppText from "../AppText";
import { TouchableOpacity, TouchableWithoutFeedback } from "react-native-gesture-handler";
import MCI from "@expo/vector-icons/MaterialCommunityIcons";

const ExpandableList = ({ title, show }) => {
  const [expand, setExpand] = useState(false);
  return (
    <View>
      <TouchableWithoutFeedback onPress={() => setExpand(!expand)}>
        <View style={styles.bar}>
          <AppText style={{ color: "white" }}>{title}</AppText>
          <MCI name="chevron-down" size={24} color="black" />
        </View>
      </TouchableWithoutFeedback>

      {expand && show.first && (
        <View>
          <View style={styles.list}>
            <AppText>bir billing (trek)</AppText>
            <AppText>27-sept-22</AppText>
          </View>
          <View style={styles.list}>
            <AppText>placid lake (trip)</AppText>
            <AppText>06-oct-22</AppText>
          </View>
        </View>
      )}
      {expand && show.second && (
        <View>
          <View style={styles.list}>
            <AppText>username : Jim</AppText>
          </View>
          <View style={styles.list}>
            <AppText>phone : +91 9871289734</AppText>
          </View>
          <View style={styles.list}>
            <AppText>email : jimparker@gmail.com</AppText>
          </View>
        </View>
      )}
    </View>
  );
};

export default ExpandableList;

const styles = StyleSheet.create({
  bar: {
    borderTopWidth: 1,
    borderBottomWidth: 1,
    marginVertical: 4,
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: "#79DAE8",
  },
  list: {
    backgroundColor: "#E8F9FD",
    marginVertical: 2,
    flexDirection: "row",
    justifyContent: "space-between",
  },
});
