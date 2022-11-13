import React, { useState, createRef } from "react";
import {
  StyleSheet,
  TextInput,
  View,
  Text,
  ScrollView,
  Image,
  Keyboard,
  TouchableOpacity,
  KeyboardAvoidingView,
} from "react-native";

import { useDispatch } from "react-redux";
import { SignIn } from "../firebase/user";

import theme from "../config/theme";
import buttonStyles from "../config/buttons";
import inputStyles from "../config/inputs";

const SignInScreen = ({ navigation }) => {
  const [userEmail, setUserEmail] = useState("");
  const [userPassword, setUserPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [errortext, setErrortext] = useState("");

  const passwordInputRef = createRef();

  const dispatch = useDispatch();
  const handleSubmitPress = () => {
    setErrortext("");
    if (!userEmail) {
      alert("Please provide your Username");
      return;
    }
    if (!userPassword) {
      alert("Please provide your Password");
      return;
    }
    setLoading(true);
    let user = { isLoggedIn: true, email: userEmail, password: userPassword };
    SignIn(dispatch, user);
  };

  return (
    <View style={styles.mainBody}>
      <ScrollView
        keyboardShouldPersistTaps="handled"
        contentContainerStyle={{
          flex: 1,
          justifyContent: "flex-start",
          paddingTop: "10%",
          alignContent: "center",
        }}
      >
        <View>
          <KeyboardAvoidingView enabled>
            <View style={{ alignItems: "flex-start", marginLeft: 10 }}>
              <Text style={inputStyles.textPrimaryHeader}>Sign In</Text>
              <Text
                style={{
                  fontFamily: "Poppins-Medium",
                  fontSize: 18,
                  color: theme.COLORS.GREY,
                  margin: 10,
                }}
              >
                Enter your details for entry to your digital clubhouse.
              </Text>
            </View>

            <View style={styles.SectionStyle}>
              <Text
                style={{
                  fontFamily: "Poppins-Medium",
                  fontSize: 12,
                  color: theme.COLORS.GREY,
                  marginBottom: 10,
                }}
              >
                Username
              </Text>
              <TextInput
                style={styles.inputStyle}
                onChangeText={(UserEmail) => setUserEmail(UserEmail)}
                // placeholder="Enter Email" //dummy@abc.com
                // placeholderTextColor="#8b9cb5"
                autoCapitalize="none"
                keyboardType="email-address"
                returnKeyType="next"
                onSubmitEditing={() =>
                  passwordInputRef.current && passwordInputRef.current.focus()
                }
                underlineColorAndroid="#f000"
                blurOnSubmit={false}
              />
            </View>
            <View style={styles.SectionStyle}>
              <Text
                style={{
                  fontFamily: "Poppins-Medium",
                  fontSize: 12,
                  color: theme.COLORS.GREY,
                  marginBottom: 10,
                }}
              >
                Password
              </Text>
              <TextInput
                style={styles.inputStyle}
                onChangeText={(UserPassword) => setUserPassword(UserPassword)}
                // placeholder="Enter Password" //12345
                // placeholderTextColor="#8b9cb5"
                keyboardType="default"
                ref={passwordInputRef}
                onSubmitEditing={Keyboard.dismiss}
                blurOnSubmit={false}
                secureTextEntry={true}
                underlineColorAndroid="#f000"
                returnKeyType="next"
              />
            </View>
            {errortext != "" ? (
              <Text style={styles.errorTextStyle}>{errortext}</Text>
            ) : null}
            <View style={{ paddingTop: 15, paddingBottom: 20 }}>
              <TouchableOpacity
                onPress={handleSubmitPress}
                style={{
                  ...buttonStyles.buttonPrimary,
                  justifyContent: "center",
                  width: "80%",
                  alignSelf: "center",
                }}
                activeOpacity={0.5}
              >
                <Text
                  style={{
                    ...buttonStyles.buttonTextStyle,
                    textAlign: "center",
                  }}
                >
                  LOGIN
                </Text>
              </TouchableOpacity>
            </View>
            <View style={styles.resetSection}>
              <Text style={styles.forgotText}>Forgot Password?</Text>
              <Text style={styles.resetText}>Reset Here</Text>
            </View>
            <Text style={styles.registerTextStyle}>
              Don't Have an Account ?
            </Text>

            <View style={{ paddingTop: 15 }}>
              <TouchableOpacity
                onPress={() => navigation.navigate("Register")}
                style={{
                  ...buttonStyles.buttonPrimary,
                  backgroundColor: theme.COLORS.DARK_GREY,
                  justifyContent: "center",
                  width: "80%",
                  alignSelf: "center",
                }}
                activeOpacity={0.5}
              >
                <Text
                  style={{
                    ...buttonStyles.buttonTextStyle,
                    textAlign: "center",
                  }}
                >
                  CREATE AN ACCOUNT
                </Text>
              </TouchableOpacity>
            </View>
          </KeyboardAvoidingView>
        </View>
      </ScrollView>
    </View>
  );
};
export default SignInScreen;

const styles = StyleSheet.create({
  mainBody: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: theme.COLORS.WHITE,
    alignContent: "center",
  },
  SectionStyle: {
    flexDirection: "column",
    height: 50,
    marginTop: 20,
    marginLeft: 35,
    marginRight: 35,
    margin: 10,
  },
  buttonStyle: {
    backgroundColor: theme.COLORS.PRIMARY,
    borderWidth: 0,
    color: "#FFFFFF",
    borderColor: "#7DE24E",
    height: 40,
    alignItems: "center",
    borderRadius: 30,
    marginLeft: 35,
    marginRight: 35,
    marginTop: 20,
    marginBottom: 25,
  },
  buttonTextStyle: {
    color: "#FFFFFF",
    paddingVertical: 10,
    fontSize: 16,
  },
  inputStyle: {
    flex: 1,
    color: theme.COLORS.BLACK,
    paddingLeft: 15,
    paddingRight: 15,
    borderWidth: 0,
    borderBottomWidth: 1,
    borderBottomColor: theme.COLORS.GREY,
  },
  registerTextStyle: {
    color: theme.COLORS.GREY,
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 14,
    alignSelf: "center",
    padding: 10,
  },
  errorTextStyle: {
    color: "red",
    textAlign: "center",
    fontSize: 14,
  },
  resetSection: {
    flexDirection: "row",
    color: theme.COLORS.GREY,
    paddingTop: 10,
    paddingLeft: 20,
    paddingBottom: 20,
  },
  forgotText: {
    color: theme.COLORS.GREY,
    fontWeight: "bold",
    fontSize: 14,
    paddingLeft: 10,
  },
  resetText: {
    color: theme.COLORS.PRIMARY,
    fontWeight: "bold",
    fontSize: 14,
    paddingLeft: 10,
  },
});
