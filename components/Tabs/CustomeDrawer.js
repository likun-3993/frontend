import { StyleSheet, Text, View } from "react-native";
import React from "react";
import Ionicons from "@expo/vector-icons/Ionicons";
import MCI from "@expo/vector-icons/MaterialCommunityIcons";
import AppText from "../AppText";
import ExpandableList from "../Basics/ExpandableList";
import { TouchableWithoutFeedback } from "react-native-gesture-handler";
import { AntDesign } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const CustomeDrawer = (props) => {
  const navigation = useNavigation();
  return (
    <View>
      <View style={styles.profile}>
        <View style={styles.greet}>
          <MCI name="human-greeting" size={40} color="black" />
          <AppText style={styles.head}>Hey Jim</AppText>
        </View>
        <View style={styles.greet}>
          <Ionicons name="location-sharp" size={30} color="black" />
          <AppText style={{ fontWeight: "500", paddingLeft: 5 }}>
            Manali,HP
          </AppText>
        </View>
      </View>
      <ExpandableList
        title="My Treks & Trips"
        show={{ first: true, second: false }}
      />
      <ExpandableList
        title="My Personal Details"
        show={{ first: false, second: true }}
      />
      <TouchableWithoutFeedback onPress={() => navigation.navigate("log")}>
        <View style={styles.bar}>
          <AppText style={{ color: "white" }}>Logout</AppText>
          <AntDesign name="login" size={24} color="black" />
        </View>
      </TouchableWithoutFeedback>
    </View>
  );
};

export default CustomeDrawer;

const styles = StyleSheet.create({
  greet: {
    flexDirection: "row",
    alignItems: "center",
  },
  head: {
    fontWeight: "bold",
    fontSize: 27,
  },
  bar: {
    borderTopWidth: 1,
    borderBottomWidth: 1,
    marginVertical: 4,
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: "#79DAE8",
  },
});
