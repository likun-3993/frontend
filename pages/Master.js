import { StyleSheet, Text, View } from "react-native";
import React, { useEffect } from "react";
import TopTab from "../components/Tabs/TopTab";
import Welcome from "../components/Welcome";
import { dataFetch } from "../api/client";
const Master = () => {
//   useEffect(() => dataFetch(),[]);
  return (
    <View style={{ flex: 1 }}>
      <Welcome />
      <TopTab />
    </View>
  );
};

export default Master;

const styles = StyleSheet.create({});
