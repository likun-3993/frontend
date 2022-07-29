import { StyleSheet, Text, View, FlatList } from "react-native";
import React from "react";
import Card from "../components/Card";

const data = [
  {
    id: "1",
    title: "jogini waterfall",
    level: "local",
    color: "#8CC0DE",
    age: "12",
    desc: "A beautiful less known trail goes through jungle and river",
    time: "10am - 4pm: 6hr",
    slots: "3 of 20 left",
    price: "200",
  },
  {
    id: "2",
    title: "lama dugh",
    level: "Drop at destination",
    color: "#4CACBC",
    age: "12",
    desc: "A beautiful less known trail goes through jungle and river",
    time: "10am - 4pm: 6hr",
    slots: "3 of 20 left",
    price: "200",
  },
  {
    id: "3",
    title: "old manali meadow",
    level: "local",
    color: "#8CC0DE",
    age: "12",
    desc: "A beautiful less known trail goes through jungle and river",
    time: "10am - 4pm: 6hr",
    slots: "3 of 20 left",
    price: "200",
  },
  {
    id: "4",
    title: "old cave",
    level: "Drop at destination",
    color: "#4CACBC",
    age: "12",
    desc: "A beautiful less known trail goes through jungle and river",
    time: "10am - 4pm: 6hr",
    slots: "3 of 20 left",
    price: "200",
  },
  {
    id: "5",
    title: "tiger den's stone",
    level: "local",
    color: "#8CC0DE",
    age: "12",
    desc: "A beautiful less known trail goes through jungle and river",
    time: "10am - 4pm: 6hr",
    slots: "3 of 20 left",
    price: "200",
  },
  {
    id: "6",
    title: "kho waterfall",
    level: "Drop at destination",
    color: "#4CACBC",
    age: "12",
    desc: "A beautiful less known trail goes through jungle and river",
    time: "10am - 4pm: 6hr",
    slots: "3 of 20 left",
    price: "200",
  },
];

const Trips = ({ navigation }) => {
  return (
    <View style={styles.view}>
      <FlatList
        data={data}
        showsVerticalScrollIndicator={false}
        keyExtractor={(item) => item.title}
        renderItem={({ item }) => (
          <Card
            title={item.title}
            // level={item.level}
            // color={item.color}
            desc={item.desc}
            time={item.time}
            slots={item.slots}
            price={item.price}
            level={item.level}
            color={item.color}
            id={item.id}
            onPress={() => navigation.navigate("payment", { title: "trips" })}
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
export default Trips;
