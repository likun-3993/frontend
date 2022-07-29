import React, { useContext } from "react";
import { StyleSheet, View } from "react-native";
import { Formik } from "formik";
import * as Yup from "yup";
import AppButton from "../../components/AppButton";
import AppTextInput from "../../components/Basics/AppTextInput";
import AppText from "../../components/AppText";
import Context from "../../context/Context";
const validationSchema = Yup.object({
  email: Yup.string().required().email().label("Email"),
  password: Yup.string().required().min(5).label("password"),
  // userName: Yup.string().required(),
  // userName: Yup.string().required(),
});

function SForm(props) {
  // const get = useContext(Context);

  return (
    <View style={styles.main}>
      <Formik
        initialValues={{ email: "", password: "" }}
        onSubmit={() => props.navigation.navigate("welcomeScreen")}
        validationSchema={validationSchema}
      >
        {({ handleChange, handleSubmit, errors, setFieldTouched, touched }) => (
          <>
            <AppTextInput
              placeholder="Email"
              icon="email"
              onBlur={() => setFieldTouched("email")}
              onChangeText={handleChange("email")}
              size={30}
            />
            {touched.email && (
              <AppText style={{ color: "red" }}> {errors.email}</AppText>
            )}
            <AppTextInput
              placeholder="Phone Number"
              icon="phone-dial"
              size={30}
            />
            <AppTextInput
              placeholder="Username"
              icon="account-circle"
              size={30}
            />
            <AppTextInput
              icon="lock"
              secureTextEntry
              placeholder="Password"
              onBlur={() => setFieldTouched("password")}
              onChangeText={handleChange("password")}
              size={30}
            />
            {touched.password && (
              <AppText style={{ color: "red" }}> {errors.password}</AppText>
            )}

            <AppButton title="Sign up" onPress={handleSubmit} />
          </>
        )}
      </Formik>
    </View>
  );
}
const styles = StyleSheet.create({
  main: {
    justifyContent: "center",
    flex: 1,
    padding: 5,
  },
});
export default SForm;
