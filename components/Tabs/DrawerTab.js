import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { StackList1 } from "../StackList";
import CustomeDrawer from "./CustomeDrawer";
import PostScreen from "../../pages/Post/PostScreen";

const Drawer = createDrawerNavigator();
// const drawerstatus = () => {
//   navigation.openDrawer();
// };

function MyDrawer() {
  return (
    <Drawer.Navigator
      screenOptions={{ headerShown: false }}
      drawerContent={(props) => <CustomeDrawer {...props} />}
    >
      <Drawer.Screen name="home" component={StackList1} />
      <Drawer.Screen name="post" component={PostScreen} />
    </Drawer.Navigator>
  );
}
export default MyDrawer;
