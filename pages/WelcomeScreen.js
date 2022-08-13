import { StyleSheet, Text, View, TouchableOpacity, Image } from "react-native";
import React, { useContext } from "react";
import AppText from "../components/AppText";

const WelcomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View
        style={{ justifyContent: "center", alignItems: "center", top: -100 }}
      >
        <Image
          style={styles.tinyLogo}
          source={{
            uri: "https://reactnative.dev/img/tiny_logo.png",
          }}
        />

        <AppText style={styles.text}>Treks & Trips</AppText>
      </View>
      <View style={[{ alignItems: "center" }]}>
        <AppText style={styles.head}>Hey Jim</AppText>
        <AppText style={{ fontWeight: "500", fontSize: 14 }}>
          Please let us know where are you now ?
        </AppText>
        <View style={styles.placeHolder}>
          <TouchableOpacity onPress={() => navigation.navigate("draw")}>
            <AppText style={{ fontSize: 20 }}>Manali,HP</AppText>
          </TouchableOpacity>
        </View>
        <AppText style={{ fontSize: 13, color: "#73777B" }}>
          We are coming to other locations soon
        </AppText>
      </View>
      <View style={styles.about}>
        <AppText
          style={{
            fontSize: 15,
            fontWeight: "500",
            marginBottom: 30,
            color: "#73777B",
          }}
        >
          About Us :
        </AppText>
        <AppText style={{ color: "#73777B", fontSize: 12 }}>
          We are helping solo travellers to join groups and share expenses while
          travelling and exploring the destination. You can find and join local
          trek groups and rides.
        </AppText>
      </View>
    </View>
  );
};

export default WelcomeScreen;

const styles = StyleSheet.create({
  about: {
    position: "absolute",
    bottom: 20,
    // borderWidth: 1,
    alignSelf: "center",
  },
  tinyLogo: {
    width: 50,
    height: 50,
    borderRadius: 30,
    overflow: "hidden",
  },
  container: {
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
    padding: 20,
    backgroundColor: "white",
  },
  head: {
    fontWeight: "bold",
    fontSize: 25,
    marginBottom: 10,
  },
  text: {
    fontSize: 30,
    fontWeight: "bold",
    position: "relative",
    // top: -150,
  },
  placeHolder: {
    margin: 20,
    backgroundColor: "#BDE6F1",
    padding: 4,
    paddingHorizontal: 15,
    borderWidth: 0.3,
    borderColor: "#73777B",
  },
});
