import React from "react";
import { View, Text } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import DashboardScreen from "../../screens/DashboardScreen";

const Stack = createStackNavigator();

const HomeStackNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="Dashboard" component={DashboardScreen} />
    </Stack.Navigator>
  );
};

export default HomeStackNavigator;
