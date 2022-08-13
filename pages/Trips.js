import { StyleSheet, Text, View, FlatList } from "react-native";
import React, { useContext, useEffect, useState } from "react";
import Card from "../components/Card";
import axios from "axios";
import Context from "../context/Context";

// const data = [
//   {
//     id: "1",
//     title: "jogini waterfall",
//     level: "local",
//     color: "#8CC0DE",
//     age: "12",
//     desc: "A beautiful less known trail goes through jungle and river",
//     time: "10am - 4pm: 6hr",
//     slots: "4:0 seats left",
//     price: "200 per seat",
//   },
//   {
//     id: "2",
//     title: "lama dugh",
//     level: "Drop at destination",
//     color: "#4CACBC",
//     age: "12",
//     desc: "A beautiful less known trail goes through jungle and river",
//     time: "10am - 4pm: 6hr",
//     slots: "4:0 seats left",
//     price: "200 per seat",
//   },
//   {
//     id: "3",
//     title: "old manali meadow",
//     level: "local",
//     color: "#8CC0DE",
//     age: "12",
//     desc: "A beautiful less known trail goes through jungle and river",
//     time: "10am - 4pm: 6hr",
//     slots: "4:0 seats left",
//     price: "200 per seat",
//   },
//   {
//     id: "4",
//     title: "old cave",
//     level: "Drop at destination",
//     color: "#4CACBC",
//     age: "12",
//     desc: "A beautiful less known trail goes through jungle and river",
//     time: "10am - 4pm: 6hr",
//     slots: "4:0 seats left",
//     price: "200 per seat",
//   },
//   {
//     id: "5",
//     title: "tiger den's stone",
//     level: "local",
//     color: "#8CC0DE",
//     age: "12",
//     desc: "A beautiful less known trail goes through jungle and river",
//     time: "10am - 4pm: 6hr",
//     slots: "4:0 seats left",
//     price: "200 per seat",
//   },
//   {
//     id: "6",
//     title: "kho waterfall",
//     level: "Drop at destination",
//     color: "#4CACBC",
//     age: "12",
//     desc: "A beautiful less known trail goes through jungle and river",
//     time: "10am - 4pm: 6hr",
//     slots: "4:0 seats left",
//     price: "200 per seat",
//   },
// ];

const Trips = ({ navigation }) => {
  const [update, setUpdate] = useState();
  const set = useContext(Context);
  const test = () => {
    axios({
      method: "GET",
      url: "https://tribe-backend-app-node.herokuapp.com/api/user/posttrip/",
    })
      .then(function (response) {
        d = response.data;
        set.setFata(d);
      })
      .catch(function (error) {
        console.log(error.response);
      });
  };

  useEffect(() => {
    test();
    setUpdate(set.fata);
  }, [, set.fata]);
  return (
    <View style={styles.view}>
      <FlatList
        data={update}
        showsVerticalScrollIndicator={false}
        keyExtractor={(item) => item._id}
        renderItem={({ item }) => (
          <Card
            title={item.title}
            desc={item.description}
            level={item.level}
            id={item._id}
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
