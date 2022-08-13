import { StyleSheet, Text, View, FlatList } from "react-native";
import React, { useContext, useEffect, useState } from "react";
import Card from "../components/Card";
import axios from "axios";
import Context from "../context/Context";

const Treks = ({ navigation }) => {
  const [update, setUpdate] = useState();
  const set = useContext(Context);
  const test = () => {
    axios({
      method: "GET",
      url: "https://tribe-backend-app-node.herokuapp.com/api/user/posttrek/",
    })
      .then(function (response) {
        d = response.data;
        set.setData(d);
      })
      .catch(function (error) {
        console.log(error.response);
      });
  };
  useEffect(() => {
    test();
    setUpdate(set.data);
  }, [set.data]);

  // const data = [
  //   {
  //     id: "1",
  //     title: "jogini waterfall",
  //     desc: "A beautiful less known trail goes through jungle and river",
  //     // level: "easy",
  //     // color: "green",
  //     // age: "12",
  //     // time: "10am - 4pm: 6hr",
  //     // slots: "4:0 slots left ",
  //     // price: "200 per slot",
  //   },
  //   {
  //     id: "2",
  //     title: "lama dugh",
  //     level: "moderate",
  //     color: "orange",
  //     age: "12",
  //     desc: "A beautiful less known trail goes through jungle and river",
  //     time: "10am - 4pm: 6hr",
  //     slots: "4:0 slots left ",
  //     price: "200 per slot",
  //   },
  //   {
  //     id: "3",
  //     title: "old manali meadow",
  //     level: "easy",
  //     color: "green",
  //     age: "12",
  //     desc: "A beautiful less known trail goes through jungle and river",
  //     time: "10am - 4pm: 6hr",
  //     slots: "4:0 slots left",
  //     price: "200 per slot",
  //   },
  //   {
  //     id: "4",
  //     title: "old cave",
  //     level: "moderate",
  //     color: "orange",
  //     age: "12",
  //     desc: "A beautiful less known trail goes through jungle and river",
  //     time: "10am - 4pm: 6hr",
  //     slots: "4:0 slots left",
  //     price: "200 per slot",
  //   },
  //   {
  //     id: "5",
  //     title: "tiger den's stone",
  //     level: "easy",
  //     color: "green",
  //     age: "12",
  //     desc: "A beautiful less known trail goes through jungle and river",
  //     time: "10am - 4pm: 6hr",
  //     slots: "4:0 slots left",
  //     price: "200 per slot",
  //   },
  //   {
  //     id: "6",
  //     title: "kho waterfall",
  //     level: "difficult",
  //     color: "red",
  //     age: "12",
  //     desc: "A beautiful less known trail goes through jungle and river",
  //     time: "10am - 4pm: 6hr",
  //     slots: "4:0 slots left",
  //     price: "200 per slot",
  //   },
  // ];

  return (
    <View style={styles.view}>
      <FlatList
        data={update}
        showsVerticalScrollIndicator={false}
        keyExtractor={(item) => item._id}
        renderItem={({ item }) => (
          <Card
            title={item.title}
            level={item.level}
            desc={item.description}
            id={item._id}
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
