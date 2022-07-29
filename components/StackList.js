import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import Treks from "../pages/Treks";
import Trips from "../pages/Trips";
import Payment from "../pages/Payment";
import PaymentSuccess from "../pages/PaymentSuccess";
import Ionicons from "@expo/vector-icons/Ionicons";
import { Button } from "react-native";
import Master from "../pages/Master";
import Login from "../pages/LogSign/Login";
import LForm from "../pages/LogSign/LForm";
import SForm from "../pages/LogSign/SForm";
import { createDrawerNavigator } from "@react-navigation/drawer";
import WelcomeScreen from "../pages/WelcomeScreen";
import CustomeDrawer from "./Tabs/CustomeDrawer";

const Stack = createNativeStackNavigator();
const Slack = createNativeStackNavigator();
const Log = createNativeStackNavigator();
// const Sign = createNativeStackNavigator();

function StackList1() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="master" component={Master} />
      <Stack.Screen name="payment" component={Payment} />
      <Stack.Screen name="paymentSuccess" component={PaymentSuccess} />
    </Stack.Navigator>
  );
}
const Drawer = createDrawerNavigator();

function MyDrawer() {
  return (
    <Drawer.Navigator
      screenOptions={{ headerShown: false }}
      drawerContent={(props) => <CustomeDrawer {...props} />}
    >
      <Drawer.Screen name="home" component={StackList1} />
      {/* <Drawer.Screen name="post" component={PostScreen} /> */}
    </Drawer.Navigator>
  );
}

function StackList2() {
  return (
    <Slack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Slack.Screen name="trips" component={Trips} />
    </Slack.Navigator>
  );
}

function LogStack() {
  return (
    <Log.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Log.Screen name="log" component={Login} />
      <Log.Screen name="logForm" component={LForm} />
      <Log.Screen name="signForm" component={SForm} />
      <Log.Screen name="welcomeScreen" component={WelcomeScreen} />
      <Log.Screen name="draw" component={MyDrawer} />
    </Log.Navigator>
  );
}
// function SignStack() {
//   <Sign.Navigator
//     screenOptions={{
//       headerShown: false,
//     }}
//   >
//     <Sign.Screen name="log" component={Login} />
//   </Sign.Navigator>;
// }

export { StackList1, StackList2, LogStack };
