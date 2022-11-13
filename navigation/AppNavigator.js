import * as React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import DrawerNavigator from "./DrawerNavigator";

const Stack = createNativeStackNavigator();

const AppNavigator = () => {
  return <DrawerNavigator />;
};

export default AppNavigator;
