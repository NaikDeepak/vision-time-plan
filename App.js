import React, { useEffect, useState, useCallback } from "react";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import {
  StyleSheet,
} from "react-native";
import { StatusBar } from "expo-status-bar";
import { Provider } from "react-redux";
import AppRoute from "./navigation/AppRoute";
import { store } from "./redux/store";
import { GalioProvider } from "galio-framework";

const customTheme = {
  SIZES: { BASE: 18 },
  // this will overwrite the Galio SIZES BASE value 16
  COLORS: { PRIMARY: "red" },
  // this will overwrite the Galio COLORS PRIMARY color #B23AFC
};

const App = () => {
  const [fontsLoaded] = useFonts({
    "Poppins-Black": require("./assets/fonts/Poppins-Black.ttf"),
    "Poppins-Bold": require("./assets/fonts/Poppins-Bold.ttf"),
    "Poppins-ExtraBold": require("./assets/fonts/Poppins-ExtraBold.ttf"),
    "Poppins-ExtraLight": require("./assets/fonts/Poppins-ExtraLight.ttf"),
    "Poppins-Light": require("./assets/fonts/Poppins-Light.ttf"),
    "Poppins-Medium": require("./assets/fonts/Poppins-Medium.ttf"),
    "Poppins-Regular": require("./assets/fonts/Poppins-Regular.ttf"),
    "Poppins-SemiBold": require("./assets/fonts/Poppins-SemiBold.ttf"),
  });
  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  return (
    <>
      <Provider store={store}>
        <GalioProvider theme={customTheme}>
          <AppRoute />
          <StatusBar style="auto" />
        </GalioProvider>
      </Provider>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
});

export default App;
