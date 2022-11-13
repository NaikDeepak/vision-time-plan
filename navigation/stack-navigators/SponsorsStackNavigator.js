import React from "react";
import { View, Text } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import SponsorsScreen from "../../screens/SponsorsScreen";

const Stack = createStackNavigator();

const SponsorsStackNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="Sponsors" component={SponsorsScreen} />
    </Stack.Navigator>
  );
};

export default SponsorsStackNavigator;
