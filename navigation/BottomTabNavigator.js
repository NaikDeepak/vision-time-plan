import * as React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Text, StyleSheet } from "react-native";
import { Icon } from "galio-framework";

import HomeStackNavigator from "./stack-navigators/HomeStackNavigator";
import NewsStackNavigator from "./stack-navigators/NewsStackNavigator";
import ContactStackNavigator from "./stack-navigators/ContactStackNavigator";
import theme from "../config/theme";

const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        // barStyle: { backgroundColor: "#006600" },
      }}
    >
      <Tab.Screen
        name="HomeStack"
        component={HomeStackNavigator}
        options={{
          tabBarIcon: ({ focused }) => (
            // <Icon name="home" size={30} color={focused ? '#551E18' : '#000'} />
            <Icon
              name="home"
              family="feather"
              size={theme.SIZES.BASE * 1.75}
              color={focused ? theme.COLORS.SECONDARY : theme.COLORS.GREY}
            />
          ),
          tabBarLabel: () => <Text style={styles.tabBarLabel}>Dashboard</Text>,
        }}
      />
      <Tab.Screen
        name="NewsStack"
        component={NewsStackNavigator}
        options={{
          tabBarIcon: ({ focused }) => (
            <Icon
              name="clipboard"
              family="feather"
              size={theme.SIZES.BASE * 1.75}
              color={focused ? theme.COLORS.SECONDARY : theme.COLORS.GREY}
            />
          ),
          tabBarLabel: () => <Text style={styles.tabBarLabel}>News</Text>,
        }}
      />
      <Tab.Screen
        name="ContactStack"
        component={ContactStackNavigator}
        options={{
          tabBarIcon: ({ focused }) => (
            <Icon
              name="inbox"
              family="feather"
              size={theme.SIZES.BASE * 1.75}
              color={focused ? theme.COLORS.SECONDARY : theme.COLORS.GREY}
            />
          ),
          tabBarLabel: () => <Text style={styles.tabBarLabel}>Contacts</Text>,
        }}
      />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  tabBarLabel: {
    color: theme.COLORS.BLACK,
    fontSize: 12,
  },
});

export default BottomTabNavigator;
