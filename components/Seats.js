import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React, { useEffect, useState } from "react";
import AppText from "./AppText";

// let count = (val) => {};
const Seats = ({ number, func }) => {
  const [counter, setCounter] = useState(1);
  const [amount, setAmount] = useState(0);
  let [backgroundColor, setbackgroundColor] = useState("white");
  if (counter % 2 === 0) {
    useEffect(() => {
      setbackgroundColor("#B4FF9F");
      setAmount(-200);
      func(amount);
    }, [counter]);
  } else {
    useEffect(() => {
      setbackgroundColor("white");
      setAmount(200);
      func(amount);
    }, [counter]);
  }
  return (
    <TouchableOpacity
      onPress={() => {
        setCounter(counter + 1);
      }}
    >
      <View style={[styles.seat, { backgroundColor }]}>
        <AppText>{number}</AppText>
      </View>
    </TouchableOpacity>
  );
};

export default Seats;

const styles = StyleSheet.create({
  seat: {
    height: 30,
    width: 30,
    borderRadius: 15,
    borderWidth: 2,
    alignItems: "center",
    justifyContent: "center",
    marginRight: 5,
  },
});
