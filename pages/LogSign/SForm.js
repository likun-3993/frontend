import React, { useContext, useEffect } from "react";
import { StyleSheet, View } from "react-native";
import { Formik } from "formik";
import * as Yup from "yup";
import AppButton from "../../components/AppButton";
import AppTextInput from "../../components/Basics/AppTextInput";
import AppText from "../../components/AppText";
import Context from "../../context/Context";
import { dataPost } from "../../api/client";
const validationSchema = Yup.object({
  email: Yup.string().required().email().label("Email"),
  password: Yup.string().required().min(5).label("password"),
  // userName: Yup.string().required(),
  // userName: Yup.string().required(),
});

function SForm(props) {
  return (
    <View style={styles.main}>
      <View style={styles.title}>
        <View>
          <AppText style={{ fontSize: 40 }}>Sign Up</AppText>
        </View>
        <AppText style={{ color: "#73777B" }}>
          Please enter your basic details
        </AppText>
      </View>
      <Formik
        initialValues={{ email: "", password: "", phonenumber: "", name: "" }}
        onSubmit={async (data) => {
          console.log(data);
          dataPost(data);
          props.navigation.navigate("welcomeScreen");
        }}
        validationSchema={validationSchema}
      >
        {({
          handleChange,
          handleSubmit,
          errors,
          setFieldTouched,
          touched,
          values,
        }) => (
          <>
            <AppTextInput
              placeholder="Email"
              icon="email"
              style={styles.input}
              onBlur={() => setFieldTouched("email")}
              onChangeText={handleChange("email")}
              size={30}
            />
            {touched.email && (
              <AppText style={{ color: "red" }}> {errors.email}</AppText>
            )}
            <AppTextInput
              style={styles.input}
              placeholder="Phone Number"
              keyboardType="numeric"
              onChangeText={handleChange("phonenumber")}
              icon="phone-dial"
              size={30}
            />
            <AppTextInput
              placeholder="Username"
              style={styles.input}
              icon="account-circle"
              name
              onChangeText={handleChange("name")}
              size={30}
            />
            <AppTextInput
              icon="lock"
              secureTextEntry
              style={styles.input}
              placeholder="Password"
              onBlur={() => setFieldTouched("password")}
              onChangeText={handleChange("password")}
              size={30}
            />
            {touched.password && (
              <AppText style={{ color: "red" }}> {errors.password}</AppText>
            )}

            <View style={styles.button}>
              <AppButton
                style={{ backgroundColor: "#8CC0DE" }}
                title="Sign Up"
                onPress={() => {
                  console.log(values);
                  dataPost(values);
                  // console.log(res);
                  handleSubmit();
                }}
              />
            </View>
          </>
        )}
      </Formik>
    </View>
  );
}
const styles = StyleSheet.create({
  button: {
    marginTop: 30,
    width: "50%",
  },
  input: {
    borderRadius: 50,
    overflow: "hidden",
    backgroundColor: "#73777B",
  },
  main: {
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
    padding: 5,
    backgroundColor: "white",
    paddingHorizontal: 20,
  },
  title: {
    position: "relative",
    justifyContent: "center",
    alignItems: "center",
    top: -20,
  },
});
export default SForm;
