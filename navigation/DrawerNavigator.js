import * as React from "react";
import { View, StyleSheet, Image, Text, TouchableOpacity } from "react-native";
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItem,
} from "@react-navigation/drawer";
import { Icon } from "galio-framework";

import BottomTabNavigator from "./BottomTabNavigator";
import OnBoardingStackNavigator from "./stack-navigators/OnBoardingStackNavigator";
import theme from "../config/theme";
import SponsorsStackNavigator from "./stack-navigators/SponsorsStackNavigator";

const Drawer = createDrawerNavigator();

const CustomDrawerContent = (props) => {
  return (
    <DrawerContentScrollView {...props}>
      {Object.entries(props.descriptors).map(([key, descriptor], index) => {
        const focused = index === props.state.index;
        //console.log("dee", index, props.state);
        return (
          <DrawerItem
            key={key}
            label={() => (
              <Text
                style={focused ? styles.drawerLabelFocused : styles.drawerLabel}
              >
                {descriptor.options.title}
              </Text>
            )}
            onPress={() =>
              descriptor.navigation.navigate(descriptor.route.name)
            }
            style={[
              styles.drawerItem,
              focused ? styles.drawerItemFocused : null,
            ]}
          />
        );
      })}
    </DrawerContentScrollView>
  );
};

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator
      screenOptions={({ navigation }) => ({
        headerStyle: {
          backgroundColor: theme.COLORS.PRIMARY,
          height: 80,
        },
        headerLeft: () => (
          <TouchableOpacity
            onPress={() => navigation.toggleDrawer()}
            style={styles.headerLeft}
          >
            {/* <Icon name="bars" size={20} color="#fff" /> */}
            <Icon
              name="menu"
              family="feather"
              size={theme.SIZES.BASE * 1.75}
              color={theme.COLORS.WHITE}
            />
          </TouchableOpacity>
        ),
      })}
      drawerContent={(props) => <CustomDrawerContent {...props} />}
    >
      <Drawer.Screen
        name="HomeTabs"
        component={BottomTabNavigator}
        options={{
          title: "DASHBOARD",
          headerTitle: () => <Text style={styles.headerTitle}>DASHBOARD</Text>,
          //   headerTitle: () => <Image source={require("../assets/icon.png")} />,
          headerRight: () => (
            <View style={styles.headerRight}>
              <Icon
                name="bell"
                family="feather"
                size={theme.SIZES.BASE * 1.75}
                color={theme.COLORS.SECONDARY}
              />
            </View>
          ),
        }}
      />

      <Drawer.Screen
        name="SponsorsStack"
        component={SponsorsStackNavigator}
        options={{
          title: "Sponsors",
          headerTitle: () => (
            <Text style={styles.headerTitle}>Our Sponsors</Text>
          ),
        }}
      />

      <Drawer.Screen
        name="OnBoardingStack"
        component={OnBoardingStackNavigator}
        options={{
          title: "ONBOARDING",
          headerTitle: () => (
            <>
              <Text style={styles.headerTitle}>ONBOARDING</Text>
            </>
          ),
        }}
      />
    </Drawer.Navigator>
  );
};

const styles = StyleSheet.create({
  headerLeft: {
    marginLeft: 15,
  },
  headerTitle: {
    color: "white",
    fontSize: 18,
    fontWeight: "500",
  },
  headerRight: {
    marginRight: 15,
  },
  // drawer content
  drawerLabel: {
    fontSize: 14,
  },
  drawerLabelFocused: {
    fontSize: 14,
    color: theme.COLORS.PRIMARY,
    fontWeight: "500",
  },
  drawerItem: {
    height: 50,
    justifyContent: "center",
  },
  drawerItemFocused: {
    backgroundColor: theme.COLORS.PRIMARY_MUTED,
  },
});

export default DrawerNavigator;
