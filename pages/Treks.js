import { StyleSheet, Text, View, FlatList } from "react-native";
import React, { useContext, useState } from "react";
import Card from "../components/Card";

const data = [
  {
    title: "jogini waterfall",
    level: "easy",
    color: "green",
    age: "12",
    desc: "A beautiful less known trail goes through jungle and river",
    time: "10am - 4pm: 6hr",
    slots: "3 of 20 left",
    price: "200",
  },
  {
    title: "lama dugh",
    level: "moderate",
    color: "orange",
    age: "12",
    desc: "A beautiful less known trail goes through jungle and river",
    time: "10am - 4pm: 6hr",
    slots: "3 of 20 left",
    price: "200",
  },
  {
    title: "old manali meadow",
    level: "easy",
    color: "green",
    age: "12",
    desc: "A beautiful less known trail goes through jungle and river",
    time: "10am - 4pm: 6hr",
    slots: "3 of 20 left",
    price: "200",
  },
  {
    title: "old cave",
    level: "moderate",
    color: "orange",
    age: "12",
    desc: "A beautiful less known trail goes through jungle and river",
    time: "10am - 4pm: 6hr",
    slots: "3 of 20 left",
    price: "200",
  },
  {
    title: "tiger den's stone",
    level: "easy",
    color: "green",
    age: "12",
    desc: "A beautiful less known trail goes through jungle and river",
    time: "10am - 4pm: 6hr",
    slots: "3 of 20 left",
    price: "200",
  },
  {
    title: "kho waterfall",
    level: "difficult",
    color: "red",
    age: "12",
    desc: "A beautiful less known trail goes through jungle and river",
    time: "10am - 4pm: 6hr",
    slots: "3 of 20 left",
    price: "200",
  },
];

const Treks = ({ navigation }) => {
  return (
    <View style={styles.view}>
      <FlatList
        data={data}
        showsVerticalScrollIndicator={false}
        keyExtractor={(item) => item.title}
        renderItem={({ item }) => (
          <Card
            title={item.title}
            level={item.level}
            color={item.color}
            age={item.age}
            desc={item.desc}
            time={item.time}
            slots={item.slots}
            price={item.price}
            onPress={() => navigation.navigate("payment", { title: "treks" })}
          />
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  view: {
    flex: 1,
    padding: 5,
    backgroundColor: "white",
  },
});
export default Treks;
