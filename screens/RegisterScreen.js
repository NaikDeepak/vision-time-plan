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

import theme from "../config/theme";
import buttonStyles from "../config/buttons";
import inputStyles from "../config/inputs";
import { useDispatch } from "react-redux";
import { SignUp } from "../firebase/user";

const RegisterScreen = ({ navigation }) => {
  const [userEmail, setUserEmail] = useState("");
  const [userName, setUserName] = useState("");
  const [userPassword, setUserPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [errortext, setErrortext] = useState("");

  const passwordInputRef = createRef();
  const emailInputRef = createRef();
  const dispatch = useDispatch();

  const handleSubmitPress = () => {
    setErrortext("");
    if (!userName) {
      alert("Please provide your User name");
      return;
    }
    if (!userEmail) {
      alert("Please provide your Email");
      return;
    }
    if (!userPassword) {
      alert("Please provide your Password");
      return;
    }
    setLoading(true);
    let user = {
      userName: userName,
      email: userEmail,
      password: userPassword,
    };
    SignUp(dispatch, user);
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
              <Text style={inputStyles.textPrimaryHeader}>
                Create an Account
              </Text>
              <Text
                style={{
                  fontFamily: "Poppins-Medium",
                  fontSize: 18,
                  color: theme.COLORS.GREY,
                  margin: 10,
                }}
              >
                If you are a first time user fill in your details to create an
                account.
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
                User Name
              </Text>
              <TextInput
                style={styles.inputStyle}
                onChangeText={(UserName) => setUserName(UserName)}
                // placeholder="Enter Email" //dummy@abc.com
                // placeholderTextColor="#8b9cb5"
                autoCapitalize="none"
                keyboardType="email-address"
                returnKeyType="next"
                onSubmitEditing={() =>
                  emailInputRef.current && emailInputRef.current.focus()
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
                EMail
              </Text>
              <TextInput
                style={styles.inputStyle}
                onChangeText={(UserEmail) => setUserEmail(UserEmail)}
                // placeholder="Enter Email" //dummy@abc.com
                // placeholderTextColor="#8b9cb5"
                autoCapitalize="none"
                keyboardType="email-address"
                returnKeyType="next"
                ref={emailInputRef}
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
            <View style={{ paddingTop: 30, paddingBottom: 20 }}>
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
                  SIGN UP
                </Text>
              </TouchableOpacity>
            </View>

            <View style={{ paddingTop: 15 }}>
              <Text style={styles.registerTextStyle}>
                By tapping Sign Up you accept our terms and conditions.
              </Text>
            </View>
          </KeyboardAvoidingView>
        </View>
      </ScrollView>
    </View>
  );
};
export default RegisterScreen;

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
