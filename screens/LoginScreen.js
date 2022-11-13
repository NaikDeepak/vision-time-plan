import React from "react";
import { StyleSheet, TouchableOpacity, View, Image } from "react-native";
import { useDispatch } from "react-redux";
import { useNavigation } from "@react-navigation/native";
import { setSignIn } from "../redux/slices/authSlice";

import { Text, Button, Icon } from "galio-framework";
import images from "../config/images";
import theme from "../config/theme";
import buttonStyles from "../config/buttons";

const LoginScreen = () => {
  const dispatch = useDispatch();

  const navigator = useNavigation();
  const handleLogin = () => {
    const user = {
      isLoggedIn: true,
      email: "jdoe@test.com",
      userName: "johnDoe",
    };
    dispatch(setSignIn(user));
  };
  const handleNavigation = () => {
    navigator.navigate("SignIn");
  };

  return (
    <View style={styles.container}>
      <Image style={styles.logo} source={images.splash3x} />

      <View style={styles.textContainer}>
        <Text style={styles.welcomeText}>Vison Time Plan</Text>
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          onPress={handleNavigation}
          style={{
            ...buttonStyles.buttonPrimary,
            ...buttonStyles.buttonEmailStyle,
          }}
          activeOpacity={0.5}
        >
          <Icon
            name="mail"
            family="feather"
            size={theme.SIZES.BASE * 1.75}
            color={theme.COLORS.WHITE}
            style={buttonStyles.buttonImageIconStyle}
          />
          <Text style={buttonStyles.buttonTextStyle}> Login With Email</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={{
            ...buttonStyles.buttonPrimary,
            ...buttonStyles.buttonGPlusStyle,
            ...buttonStyles.shadow,
          }}
          activeOpacity={0.5}
          onPress={handleLogin}
        >
          <Icon
            name="google"
            family="AntDesign"
            size={theme.SIZES.BASE * 1.75}
            color={theme.COLORS.BLACK}
            style={buttonStyles.buttonImageIconStyle}
          />
          <Text
            style={{
              ...buttonStyles.buttonTextStyle,
              color: theme.COLORS.BLACK,
            }}
          >
            Login With Google
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: theme.COLORS.WHITE,
  },
  logo: {
    marginTop: 100,
  },
  buttonContainer: {
    flex: 1,
    justifyContent: "center",
    paddingTop: 10,
    backgroundColor: theme.COLORS.WHITE,
    padding: 8,
  },

  welcomeText: {
    fontFamily: "Poppins-SemiBold",
    fontSize: 24,
  },
});
