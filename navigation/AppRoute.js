import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import AppNavigator from "./AppNavigator";
import AuthNavigator from "./AuthNavigator";
import { useSelector } from "react-redux";
import { selectIsLoggedIn } from "../redux/slices/authSlice";

const AppRoute = ({ user }) => {
  //TODO : remove below console.log later , using it for testing
  console.log("User", user);
  const isLoggedIn = useSelector(selectIsLoggedIn);
  return (
    <NavigationContainer>
      {/* Conditional stack navigator rendering based on login state */}

      {isLoggedIn ? <AppNavigator /> : <AuthNavigator />}
    </NavigationContainer>
  );
};

export default AppRoute;
