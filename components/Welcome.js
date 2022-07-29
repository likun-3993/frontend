import { StyleSheet, Text, View } from "react-native";
import React from "react";
import AppText from "./AppText";
import Ionicons from "@expo/vector-icons/Ionicons";
import MCI from "@expo/vector-icons/MaterialCommunityIcons";
import { useNavigation } from "@react-navigation/native";
import { TouchableWithoutFeedback } from "react-native-gesture-handler";

const Welcome = () => {
  const navigation = useNavigation();
  return (
    <>
      <View style={styles.container}>
        <View style={styles.burger}>
          <TouchableWithoutFeedback onPress={() => navigation.openDrawer()}>
            <MCI name={"menu"} size={30} />
          </TouchableWithoutFeedback>
        </View>
        <View>
          <View style={styles.greet}>
            <MCI name="human-greeting" size={50} color="black" />
            <AppText style={styles.head}>Hey Jim</AppText>
          </View>
          <View style={styles.greet}>
            <Ionicons
              name="location-sharp"
              size={30}
              color="black"
              s
              style={{ paddingLeft: 10 }}
            />
            <AppText style={{ fontWeight: "500" }}>Manali,HP</AppText>
          </View>
        </View>
      </View>
      <AppText
        style={{
          fontWeight: "500",
          paddingTop: 20,
          fontSize: 18,
          backgroundColor: "white",
        }}
      >
        What are you looking for ?
      </AppText>
    </>
  );
};

export default Welcome;

const styles = StyleSheet.create({
  burger: {
    position: "absolute",
    left: 0,
    top: 0,
  },
  container: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
  },
  greet: {
    flexDirection: "row",
    alignItems: "center",
  },
  head: {
    fontWeight: "bold",
    fontSize: 27,
  },
});
