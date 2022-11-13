import * as React from "react";
import { StyleSheet, View, Text, Image, TouchableOpacity } from "react-native";
import Salutation from "../components/Salutation";
import images from "../config/images";
import buttonStyles from "../config/buttons";

const OnBoardingScreen = () => {
  //const staticImage = require("../assets/Easts-logo-200×200px.png");
  return (
    <View style={styles.container}>
      <Image style={styles.logo} source={images.logo1x} />

      <View style={styles.textContainer}>
        <Salutation userName="Deepak" time={new Date().getHours()} />
        <Text style={styles.welcomeText}>Welcome Back</Text>
        <Text style={styles.subText}>
          Welcome back to club rugby. Where on any given day anything can
          happen.
        </Text>
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={{
            ...buttonStyles.buttonPrimarySmall,
            backgroundColor: "#fff",
            borderColor: "#595959",
            borderWidth: 1,
          }}
        >
          <Text
            style={{
              color: "#595959",
              fontSize: 18,
              fontWeight: "bold",
            }}
          >
            Junior
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            ...buttonStyles.buttonPrimarySmall,
          }}
        >
          <Text
            style={{
              color: "#fff",
              fontSize: 18,
              fontWeight: "bold",
            }}
          >
            Senior
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignContent: "center",
    alignItems: "center",
  },
  textContainer: {
    flex: 1,

    marginTop: 10,
    alignContent: "center",
    alignItems: "center",
  },
  buttonContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    alignContent: "space-between",
    justifyContent: "space-between",
    padding: 10,
    marginBottom: 40,
    marginLeft: 20,
    marginRight: 20,
  },
  button: {},
  logo: {},
  onboardingView: {},
  welcomeText: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#595959",
    textAlign: "center",
    marginTop: 5,
  },
  subText: {
    margin: 4,
    fontSize: 14,
    color: "#000",
    marginTop: 40,
    textAlign: "center",
  },
});

export default OnBoardingScreen;
