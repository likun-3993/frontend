import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React, { useState } from "react";
import Ionicons from "@expo/vector-icons/Ionicons";
import MCI from "@expo/vector-icons/MaterialCommunityIcons";
import AppText from "../AppText";
import ExpandableList from "../Basics/ExpandableList";
import { TouchableWithoutFeedback } from "react-native-gesture-handler";
import { AntDesign } from "@expo/vector-icons";

const CustomeDrawer = ({ navigation }) => {
  const [expand, setExpand] = useState(false);
  return (
    <View style={styles.container}>
      <View>
        <View style={styles.profile}>
          <View style={styles.greet}>
            <MCI name="human-greeting" size={35} color="black" />
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
          name="road"
        />
        <ExpandableList
          title="My Personal Details"
          show={{ first: false, second: true }}
          name="card-account-details-outline"
        />
        <TouchableWithoutFeedback onPress={() => setExpand(!expand)}>
          <View
            style={{ flexDirection: "row", justifyContent: "space-between" }}
          >
            <MCI name="notebook" size={24} color="black" />
            <AppText style={{ color: "#73777B", fontSize: 20 }}>Post</AppText>
            <MCI name="chevron-down" size={24} color="black" />
          </View>
        </TouchableWithoutFeedback>
        {expand && (
          <View>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate("post", { key: "trip" });
                navigation.closeDrawer();
              }}
            >
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                }}
              >
                <AppText style={{ fontSize: 16 }}>Post A Trip</AppText>
                <MCI name="chevron-right" size={24} color="black" />
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate("post", { key: "trek" });
                navigation.closeDrawer();
              }}
            >
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                }}
              >
                <AppText style={{ fontSize: 16 }}>Post A Trek</AppText>
                <MCI name="chevron-right" size={24} color="black" />
              </View>
            </TouchableOpacity>
          </View>
        )}
      </View>
      <View>
        <TouchableWithoutFeedback onPress={() => navigation.navigate("log")}>
          <View style={styles.bar}>
            <AppText
              style={{ color: "black", fontSize: 20, fontWeight: "bold" }}
            >
              Logout
            </AppText>
            <AntDesign name="login" size={24} color="black" />
          </View>
        </TouchableWithoutFeedback>
      </View>
    </View>
  );
};

export default CustomeDrawer;

const styles = StyleSheet.create({
  container: {
    height: "100%",
    justifyContent: "space-between",
  },
  greet: {
    flexDirection: "row",
    alignItems: "center",
  },
  head: {
    fontWeight: "bold",
    fontSize: 27,
  },
  profile: {
    marginBottom: 20,
  },
  bar: {
    marginVertical: 4,
    flexDirection: "row",
    justifyContent: "space-between",
    // backgroundColor: "#79DAE8",
  },
});
