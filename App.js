import { StyleSheet } from "react-native";
import React from "react";
import Screen from "./components/Screen";
import { NavigationContainer } from "@react-navigation/native";
import ContextHolder from "./context/ContextHolder";
import { LogStack } from "./components/StackList";
// import Welcome from "./components/Welcome";
// import PostScreen from "./pages/Post/PostScreen";
// import Login from "./pages/LogSign/Login";
// import TopTab from "./components/Tabs/TopTab";
// import PaymentSuccess from "./pages/PaymentSuccess";
// import Card from "./components/Card";
// import Seats from "./components/Seats";
// import MyDrawer from "./components/Tabs/DrawerTab";
// import Welcome from "./components/Welcome";
// import PostScreen from "./pages/Post/PostScreen";
// import Login from "./pages/LogSign/Login";
// import WelcomeScreen from "./pages/WelcomeScreen";
// import Treks from "./pages/Treks";
// import LForm from "./pages/LogSign/LForm";
// import WelcomeScreen from "./pages/WelcomeScreen";
// import AppText from "./components/AppText";
// import AppTextInput from "./components/Basics/AppTextInput";
// import LForm from "./pages/LogSign/LForm";
// import SForm from "./pages/LogSign/SForm";
export default function App() {
  return (
    <ContextHolder>
      <Screen>
        <NavigationContainer>
          <LogStack />
        </NavigationContainer>
      </Screen>
    </ContextHolder>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },

  text: {
    fontSize: 20,
    color: "white",
    textTransform: "capitalize",
  },
});
