import React from "react";
import { View, Text } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import ProductListingScreen from "../../screens/ProductListingScreen";

const Stack = createStackNavigator();

const ProductStackNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="ProductListing" component={ProductListingScreen} />
    </Stack.Navigator>
  );
};

export default ProductStackNavigator;
