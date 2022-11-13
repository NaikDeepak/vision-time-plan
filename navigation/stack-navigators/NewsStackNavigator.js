import React from "react";
import { View, Text } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";

const Stack = createStackNavigator();

const News = () => (
  <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
    <Text>News screen!</Text>
  </View>
);

const NewsStackNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="News" component={News} />
    </Stack.Navigator>
  );
};

export default NewsStackNavigator;
