import theme from "./theme";
import { StyleSheet } from "react-native";
const buttonStyles = StyleSheet.create({
  buttonPrimary: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: theme.COLORS.PRIMARY,
    borderWidth: 0.5,
    borderColor: theme.COLORS.WHITE,
    height: 60,
    borderRadius: 50,
    margin: 5,
    minWidth: "80%",
  },

  buttonPrimarySmall: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: theme.COLORS.PRIMARY,
    padding: 10,
    height: 60,
    borderRadius: 40,
    marginHorizontal: "1%",
    marginBottom: 6,
    minWidth: "40%",
  },

  buttonEmailStyle: {
    marginBottom: 30,
    backgroundColor: theme.COLORS.PRIMARY,
  },

  buttonGPlusStyle: {
    backgroundColor: theme.COLORS.WHITE,
  },
  buttonFacebookStyle: {
    backgroundColor: theme.COLORS.FACEBOOK,
    marginBottom: 15,
  },

  buttonOutline: {
    height: 42,
    borderRadius: 3,
    borderWidth: 2,
  },
  buttonOutlineDark: {
    borderColor: theme.COLORS.WHITE,
  },
  buttonOutlineWhite: {
    borderColor: theme.COLORS.WHITE,
  },
  buttonImageIconStyle: {
    padding: 10,
    margin: 15,
    height: 50,
    width: 50,
    resizeMode: "stretch",
  },
  buttonTextStyle: {
    color: "#fff",
    marginBottom: 4,
    marginLeft: 10,
    fontFamily: "Poppins-SemiBold",
    fontSize: 17,
  },

  buttonFull: {
    width: "100%",
    marginLeft: 0,
    marginRight: 0,
  },
  buttonIconSeparatorStyle: {
    backgroundColor: "#fff",
    width: 0,
    height: 40,
  },

  shadow: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
});
export default buttonStyles;
