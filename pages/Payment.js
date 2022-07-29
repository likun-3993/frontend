import { ScrollView, StyleSheet, View } from "react-native";
import React from "react";
import AppText from "../components/AppText";
import Banner from "../components/Banner";
import Ionicons from "@expo/vector-icons/Ionicons";
import BulletList from "../components/BulletList";
import AppButton from "../components/AppButton";

const Payment = ({ route, navigation }) => {
  return (
    <ScrollView>
      <View style={styles.container}>
        <AppText style={styles.text}>Almost Done,Jim !</AppText>
        <Banner
          title={route.params?.title}
          style={{ width: "70%", marginBottom: "4%", padding: 6 }}
          styleText={{
            fontSize: 33,
            color: "white",
            textTransform: "capitalize",
          }}
        />
        <Banner
          title={"Details"}
          style={{ width: "90%", marginBottom: "6%", borderWidth: 0.5 }}
          styleText={{ fontSize: 15, color: "white" }}
        />
        <AppText>Today , 20-June 2022</AppText>
        <AppText style={{ color: "blue" }}>Drop at destination</AppText>
        <AppText>Bir Billing</AppText>

        <Ionicons name="car-outline" size={25} />
        <AppText>2 Seats</AppText>
        <AppText>Total Amount</AppText>
        <AppText>Rs 1800</AppText>
        <Banner
          title={"Payment"}
          style={{ width: "90%", marginVertical: "7%", borderWidth: 0.5 }}
          styleText={{ fontSize: 15, color: "white" }}
        />
        <View style={styles.click}>
          <BulletList title={"pay full amount"} />
          <BulletList title={"pay only advance"} />
        </View>
        <AppText>Amount to Pay</AppText>
        <AppText style={{ fontSize: 17 }}>Rs 180</AppText>
        <AppText style={{ fontSize: 12 }}>
          Remaining will be charged during the journey
        </AppText>
        <View style={styles.list}>
          <BulletList title={"UPI"} />
          <BulletList title={"Net Banking"} />
          <BulletList title={"Credit Card"} />
          <BulletList title={"Debit Card"} />
        </View>
        <View style={styles.button}>
          <AppButton
            title={"Pay and Book"}
            style={{ backgroundColor: "#78b0f9" }}
            onPress={() =>
              navigation.navigate("paymentSuccess", {
                title: route.params?.title,
              })
            }
          />
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  button: {
    width: "80%",
  },
  click: {
    flexDirection: "row",
  },
  container: {
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
  },
  list: {
    alignItems: "flex-start",
    marginVertical: "4%",
  },
  text: {
    fontSize: 35,
    fontWeight: "bold",
    marginBottom: "10%",
  },
});

export default Payment;
