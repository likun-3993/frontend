import { StyleSheet, TouchableOpacity, View } from "react-native";
import React from "react";
import Ionicons from "@expo/vector-icons/Ionicons";
import AppText from "../components/AppText";

const PaymentSuccess = ({ route, navigation }) => {
  return (
    <View style={styles.view}>
      <Ionicons name="md-checkmark-circle" size={60} color="#42C2FF" />
      <AppText>Payment Successful</AppText>
      <View style={{ marginTop: 20 }}>
        <AppText style={styles.text}>Your trips has been booked</AppText>
      </View>
      <View style={styles.arrow}>
        <TouchableOpacity onPress={() => navigation.navigate('master')}>
          <Ionicons name="arrow-forward-circle" size={50} color="#42C2FF" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  arrow: {
    position: "absolute",
    bottom: 10,
    right: 20,
  },
  view: {
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
  },
  text: {
    fontSize: 25,
    alignItems: "center",
    justifyContent: "center",
    color: "green",
  },
});

export default PaymentSuccess;
