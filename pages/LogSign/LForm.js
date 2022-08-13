import React, { useContext } from "react";
import { StyleSheet, TouchableOpacity, View } from "react-native";
import { Formik } from "formik";
import * as Yup from "yup";
import AppButton from "../../components/AppButton";
import AppTextInput from "../../components/Basics/AppTextInput";
import AppText from "../../components/AppText";
import Context from "../../context/Context";

const validationSchema = Yup.object({
  email: Yup.string().required().email().label("Email"),
  password: Yup.string().required().min(5).label("password"),
});

function LForm(props) {
  // const get = useContext(Context);

  return (
    <View style={styles.main}>
      <View>
        <AppText style={{ fontSize: 40 }}>Login</AppText>
      </View>
      <View>
        <AppText style={{ color: "#73777B" }}>
          Please enter your Email & Password
        </AppText>
      </View>
      <Formik
        initialValues={{ email: "", password: "" }}
        onSubmit={() => props.navigation.navigate("welcomeScreen")}
        validationSchema={validationSchema}
      >
        {({ handleChange, handleSubmit, errors, setFieldTouched, touched }) => (
          <>
            <View>
              <AppTextInput
                keyboardType="email-address"
                placeholder="Email"
                style={styles.input}
                icon="email"
                onBlur={() => setFieldTouched("email")}
                onChangeText={handleChange("email")}
                size={30}
              />
            </View>
            {touched.email && (
              <AppText style={{ color: "red" }}> {errors.email}</AppText>
            )}
            <View>
              <AppTextInput
                icon="lock"
                secureTextEntry
                style={styles.input}
                placeholder="Password"
                onBlur={() => setFieldTouched("password")}
                onChangeText={handleChange("password")}
                size={30}
              />
            </View>
            {touched.password && (
              <AppText style={{ color: "red" }}> {errors.password}</AppText>
            )}
            {/* <TouchableOpacity>
              <AppText style={{ color: "#73777B" }}>Forgot Password ?</AppText>
            </TouchableOpacity> */}
            <View style={styles.button}>
              <AppButton
                style={{ backgroundColor: "#8CC0DE" }}
                title="Log in"
                onPress={() => handleSubmit()}
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
});

export default LForm;
