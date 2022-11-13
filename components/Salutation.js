import { View, Text, StyleSheet } from "react-native";
import React from "react";

export default function Salutation({
  userName = "User",
  time = new Date().getHours(),
}) {
  const message = function (time) {
    return (
      "Good " + (time < 12 ? "Morning " : time < 18 ? "Afternoon " : "Evening ")
    );
  };
  return (
    <View style={styles.container}>
      <Text style={styles.salutationText}> {message(time) + userName} </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignContent: "center",
    alignItems: "center",
  },
  salutationText: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#000",
    textAlign: "center",
  },
});
