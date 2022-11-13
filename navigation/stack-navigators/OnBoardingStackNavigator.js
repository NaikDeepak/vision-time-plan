import React from "react";
import { View, Text } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import OnBoardingScreen from "../../screens/OnBoardingScreen";

const Stack = createStackNavigator();

const OnBoardingStackNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="OnBoarding" component={OnBoardingScreen} />
    </Stack.Navigator>
  );
};

export default OnBoardingStackNavigator;
