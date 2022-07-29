import { StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import AppText from "../../components/AppText";
import AppButton from "../../components/AppButton";
import { dataFetch } from "../../api/client";

const Login =({ navigation }) => {
  useState(() => {
    console.log(dataFetch())
  }, []);
  return (
    <View style={styles.container}>
      <View style={styles.heading}>
        <AppText style={styles.text}>Treks & Trips</AppText>
        <AppText
          style={{ textAlign: "center", fontSize: 14, color: "#73777B" }}
        >
          Make your solo travel more enjoyable and pocket friendly
        </AppText>
      </View>
      <View style={styles.login}>
        <AppButton
          title="Log In"
          style={[
            styles.buttons,
            {
              marginBottom: 25,
              backgroundColor: "#8CC0DE",
              width: "50%",
              alignSelf: "center",
            },
          ]}
          external={{ fontSize: 15, fontWeight: "500" }}
          onPress={() => navigation.navigate("logForm")}
        />
        <AppButton
          style={styles.sign}
          external={styles.signExtra}
          onPress={() => navigation.navigate("signForm")}
          title="Sign Up"
        />
        <AppButton title="Continue With Facebook" style={styles.buttons} />
        <AppButton
          title="Continue With Gmail"
          style={[styles.buttons, { backgroundColor: "#F4BFBF" }]}
          external={{ color: "#000", fontWeight: "400" }}
        />
      </View>
      <View>
        <AppText
          style={{
            fontSize: 15,
            fontWeight: "500",
            marginBottom: 15,
            color: "#73777B",
          }}
        >
          Terms & Conditions
        </AppText>
        <AppText style={{ color: "#73777B", fontSize: 12 }}>
          By signing up you accept our T&Cs and Privacy Policy.
          {"\n"}
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem
          ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
          tempor incididunt ut labore et dolore magna aliqua.
        </AppText>
      </View>
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  buttons: {
    borderRadius: 5,
    borderWidth: 0.3,
    marginTop: 8,
  },
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "#FFF",
    padding: 10,
  },
  heading: {
    alignItems: "center",
  },
  login: {
    width: "80%",
  },
  sign: {
    backgroundColor: "white",
    padding: 0,
  },
  signExtra: {
    color: "blue",
    fontWeight: "500",
  },
  text: {
    fontSize: 26,
    fontWeight: "bold",
  },
});
