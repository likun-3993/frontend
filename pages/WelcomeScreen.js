import { StyleSheet, Text, View,TouchableOpacity } from "react-native";
import React from "react";
import AppText from "../components/AppText";
import {  } from "react-native-gesture-handler";

const WelcomeScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
      <View style={{ alignItems: "center" }}>
        <AppText style={styles.head}>Hey Jim</AppText>
        <AppText style={{ fontWeight: "500", fontSize: 14 }}>
          Please let us know where are you now ?
        </AppText>
        <View style={styles.placeHolder}>
          <TouchableOpacity onPress={()=>navigation.navigate('draw')}>
            <AppText style={{ fontSize: 20 }}>Manali,HP</AppText>
          </TouchableOpacity>
        </View>
        <AppText style={{ fontSize: 13, color: "#73777B" }}>
          We are coming to other locations soon
        </AppText>
      </View>
      <View style={{ marginBottom: 40 }}>
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
  container: {
    justifyContent: "space-between",
    flex: 1,
    padding: 20,
    backgroundColor:'white'
  },
  head: {
    fontWeight: "bold",
    fontSize: 25,
    marginBottom: 20,
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
