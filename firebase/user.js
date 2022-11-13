import auth from "@react-native-firebase/auth";
import { setSignIn, setSignOut } from "../redux/slices/authSlice";

function SignUp(dispatch, user) {
  console.log("user signup", user);
  auth()
    .createUserWithEmailAndPassword(user.email, user.password)
    .then(() => {
      console.log("User account created & signed in!");
      dispatch(
        setSignIn({
          isLoggedIn: true,
          email: user.email,
          userName: user.userName,
        })
      );
    })
    .catch((error) => {
      if (error.code === "auth/email-already-in-use") {
        console.log("That email address is already in use!");
      }

      if (error.code === "auth/invalid-email") {
        console.log("That email address is invalid!");
      }

      console.error(error);
    });
}

function SignIn(dispatch, user) {
  auth()
    .signInWithEmailAndPassword(user.email, user.password)
    .then(() => {
      dispatch(
        setSignIn({
          isLoggedIn: true,
          email: user.email,
          userName: user.userName,
        })
      );
      console.log("User signed in!");
    })
    .catch((error) => {
      if (error.code === "auth/invalid-email") {
        console.log("That email address is invalid!");
      }

      console.error(error);
    });
}

function SignOut() {
  auth()
    .signOut()
    .then(() => {
      console.log("User signed out!");
      dispatch(setSignOut());
    });
}

export { SignIn, SignUp, SignOut };
