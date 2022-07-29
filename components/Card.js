import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React, { useState, useContext } from "react";
import AppText from "./AppText";
import AppButton from "./AppButton";
import Seats from "./Seats";
import Context from "../context/Context";
import MCI from "@expo/vector-icons/MaterialCommunityIcons";

// import { useNavigation } from "@react-navigation/native";
// import { Dimensions } from "react-native";
// import Context from "../context/Context";
// const window = Dimensions.get("window");
// const screen = Dimensions.get("screen");

const Card = ({
  title,
  level,
  color,
  age,
  desc,
  time,
  slots,
  price,
  id,
  onPress,
}) => {
  const get = useContext(Context);
  const [expand, setExpand] = useState(false);
  const [sum, setSum] = useState(0);
  const [counter, setCounter] = useState(0);

  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() => {
          setCounter(counter + 1);
          get.setStatus(id);
          if (!(id === get.status)) {
            setCounter(1);
          }
        }}
      >
        <View style={styles.card}>
          <View style={styles.details}>
            <View style={styles.heading}>
              <AppText style={styles.headingText}>{title}</AppText>
              {level && <AppText style={{ color }}>{level}</AppText>}
              {age && <AppText>{age}+ age</AppText>}
            </View>
            <View>
              <AppText>{desc}</AppText>
            </View>
            <View style={styles.time}>
              <AppText>{time}</AppText>
              <MCI name="clock" />
            </View>
          </View>
          <View style={styles.price}>
            <View style={styles.guide}>
              <View style={styles.box}></View>
              <View style={styles.box}></View>
              <View style={styles.box}></View>
            </View>
            <AppText style={styles.cost}>Rs. {price} per seat</AppText>
          </View>
        </View>
      </TouchableOpacity>
      <View>
        {counter % 2 === 1 && id === get.status && (
          <View style={styles.extra}>
            <View style={styles.extra2}>
              <Seats number={"1"} func={(val) => setSum(sum + val)} />
              <Seats number={"2"} func={(val) => setSum(sum + val)} />
              <Seats number={"3"} func={(val) => setSum(sum + val)} />
              <Seats number={"4"} func={(val) => setSum(sum + val)} />
            </View>
            <View style={styles.total}>
              <AppText style={{ fontSize: 10 }}>Total Price</AppText>
              <AppText style={{ fontWeight: "500" }}>{sum}</AppText>
            </View>
            <View style={{ flex: 1 }}>
              <AppButton
                title="Book"
                style={{
                  borderRadius: 5,
                  backgroundColor: "#78b0f9",
                }}
                onPress={onPress}
              />
            </View>
          </View>
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  box: {
    height: 25,
    width: 18,
    borderRadius: 4,
    borderWidth: 0.3,
    backgroundColor: "#B7E5DD",
    marginRight: 4,
  },
  button: {
    width: "25%",
    position: "absolute",
    right: 2,
  },
  card: {
    flexDirection: "row",
  },
  cost: {
    alignSelf: "center",
    fontSize: 15,
    fontWeight: "400",
    marginTop: 9,
  },
  guide: {
    flexDirection: "row",
    padding: 2,
  },
  details: {
    width: "80%",
  },
  container: {
    borderWidth: 1,
    padding: 10,
    width: "100%",
    borderRadius: 20,
    marginVertical: 5,
  },
  expand: {
    padding: 10,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  extra: {
    marginVertical: 10,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    flex: 1,
    alignItems: "center",
  },
  extra2: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    width: "30%",
    flex: 1,
  },
  heading: {
    flexDirection: "row",
    alignItems: "flex-end",
  },
  headingText: {
    fontSize: 20,
    textTransform: "capitalize",
    fontWeight: "500",
  },
  price: {
    flex: 1,
    padding: 2,
    alignItems: "flex-start",
  },
  time: {
    marginTop: "5%",
    flexDirection: "row",
    alignItems: "center",
  },
  total: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default Card;
