import { ScrollView, StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import { Formik } from "formik";
import AppButton from "../../components/AppButton";
import DateTimePicker from "@react-native-community/datetimepicker";
import NamedInput from "../../components/NamedInput";
import ValuedInput from "../../components/ValuedInput";
import { test, testme } from "../../api/client";
// import ImageInputList from "../../components/ImageInputList";
import ImageIn from "../../components/ImageIn";

const initialValues = {
  title: "",
  level: "",
  description: "",
  guides: "",
  seats: "",
  vacancies: "",
  cost: "",
};

const PostScreen = ({ navigation, route }) => {
  const [date, setDate] = useState();
  const [time, setTime] = useState();
  const [mode, setMode] = useState();
  const [show, setShow] = useState(false);

  const onChange = (event, selected) => {
    setShow(false);
    let tempDate = new Date(selected);
    let fDate =
      tempDate.getDate() +
      "/" +
      (tempDate.getMonth() + 1) +
      "/" +
      tempDate.getFullYear();
    let hours = tempDate.getHours();
    if (hours > 12) {
      hours = hours - 12;
    } else if (hours === 0) {
      hours = 12;
    }
    let fTime = hours + " : " + tempDate.getMinutes();
    if (mode == "time") setTime(fTime);
    else setDate(fDate);
  };

  const showMode = (type) => {
    setMode(type);
    setShow(true);
  };
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={(values) => {
        const extra = { date, time };
        const n = {
          ...extra,
          ...values,
        };
        // test(n);
        if (route.params?.key === "trek") {
          test(n);
        } else {
          testme(n);
        }
        // title: route.params?.title
        navigation.navigate("draw");
      }}
    >
      {({ handleChange, handleSubmit, setFieldTouched, touched }) => (
        <View style={styles.container}>
          <ScrollView showsVerticalScrollIndicator={false}>
            <View>
              <NamedInput
                heading={"Title (max-15 characters)"}
                maxLength={15}
                onChangeText={handleChange("title")}
              />
              <NamedInput
                heading="Description (max-180 characters)"
                multiline
                maxLength={180}
                onChangeText={handleChange("description")}
              />
              <NamedInput
                heading={"Level (easy/med/moderate)"}
                onChangeText={handleChange("level")}
              />
              <NamedInput
                heading={"Total Seats"}
                keyboardType="numeric"
                onChangeText={handleChange("seats")}
              />
              <NamedInput
                heading={"Total Vacancies"}
                keyboardType="numeric"
                onChangeText={handleChange("vacancies")}
              />
              <NamedInput
                heading={"Cost per Seat"}
                keyboardType="numeric"
                onChangeText={handleChange("cost")}
              />
              {/* <ValuedInput
                showSoftInputOnFocus={false}
                placeholder="Level (e.g easy,med,difficult)"
                caretHidden
              /> */}
              <ValuedInput
                showSoftInputOnFocus={false}
                placeholder="Time"
                caretHidden
                name="time"
                onPress={() => showMode("time")}
                value={time}
                style={{ width: "40%" }}
              />
              <ValuedInput
                showSoftInputOnFocus={false}
                placeholder="Date"
                caretHidden
                name="calendar"
                onPress={() => showMode("date")}
                value={date}
                style={{ width: "40%" }}
              />

              {show && (
                <DateTimePicker
                  mode={mode}
                  testID="datetimepicker"
                  display="default"
                  value={new Date()}
                  onChange={onChange}
                  is24Hour={false}
                />
              )}
            </View>
            <View
              style={{
                alignItems: "flex-start",
              }}
            >
              <ImageIn />
              <ImageIn />
              <ImageIn />
            </View>
            <View style={styles.button}>
              <AppButton
                title={"Submit"}
                style={{ backgroundColor: "#78b0f9" }}
                onPress={handleSubmit}
              />
            </View>
          </ScrollView>
        </View>
      )}
    </Formik>
  );
};

export default PostScreen;

const styles = StyleSheet.create({
  button: {
    width: "90%",
    alignSelf: "center",
    marginTop: 20,
  },
  container: {
    flex: 1,
    margin: 10,
  },
  // main: {
  //   flex: 1,
  //   justifyContent: "space-between",
  // },
});
