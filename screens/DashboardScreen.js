import React, { Component } from "react";
import {
  Image,
  Dimensions,
  View,
  ActivityIndicator,
  Text,
  Button,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
} from "react-native";

import { Card } from "galio-framework";

import HTML from "react-native-render-html";
import { useSelector, useDispatch } from "react-redux";
import { useNavigation } from "@react-navigation/native";
import theme from "../config/theme";

import {
  selectIsLoggedIn,
  selectEmail,
  selectUserName,
  setSignOut,
} from "../redux/slices/authSlice";
import constants from "../config/constants";

const { width } = Dimensions.get("screen");

function getPrimaryImage(featured_media, imageList) {
  const image = imageList
    .filter((element) => element.id == featured_media)
    .map((subitem, index) => subitem?.media_details?.sizes?.medium?.source_url);
  return image[0];
}

const DashboardScreen = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const POSTS = [];

  // if (!POSTS) {
  //   return (
  //     <View
  //       style={{
  //         flex: 1,
  //         flexDirection: "column",
  //         justifyContent: "center",
  //         alignItems: "center",
  //       }}
  //     >
  //       <ActivityIndicator size="large" color="#1C97F7" />
  //     </View>
  //   );
  // }

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#F5FCFF",
      }}
    >
      {POSTS && (
        <ScrollView contentContainerStyle={styles.cards}>
          {POSTS.map((item, index) => {
            const primaryImage = getPrimaryImage(
              item.featured_media,
              item._embedded["wp:featuredmedia"]
            );
            return (
              <Card
                key={`card-${item.title.rendered}`}
                borderless
                shadowColor={theme.COLORS.BLACK}
                //titleColor={card.full ? theme.COLORS.WHITE : null}
                style={styles.card}
                title={item.title.rendered}
                caption={
                  "Published on: " + new Date(item.date).toLocaleDateString()
                }
                // location="Los Angeles, CA"
                avatar="http://i.pravatar.cc/100?id=skater"
                imageStyle={styles.cardImageRadius}
                imageBlockStyle={{ padding: theme.SIZES.BASE / 2 }}
                image={primaryImage}
              />
            );
          })}
        </ScrollView>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: 50,
  },
  tinyLogo: {
    width: 50,
    height: 50,
  },
  logo: {
    width: 66,
    height: 58,
  },
  cards: {
    width,
    backgroundColor: theme.COLORS.WHITE,
    alignItems: "center",
    justifyContent: "flex-start",
  },
  card: {
    backgroundColor: theme.COLORS.WHITE,
    width: width - theme.SIZES.BASE * 2,
    marginVertical: theme.SIZES.BASE * 0.875,
    elevation: theme.SIZES.BASE / 2,
  },
  full: {
    position: "absolute",
    bottom: 0,
    right: 0,
    left: 0,
  },
  noRadius: {
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0,
  },
  rounded: {
    borderRadius: theme.SIZES.BASE * 0.1875,
  },
  gradient: {
    bottom: 0,
    left: 0,
    right: 0,
    height: 90,
    position: "absolute",
    overflow: "hidden",
    borderBottomRightRadius: theme.SIZES.BASE * 0.5,
    borderBottomLeftRadius: theme.SIZES.BASE * 0.5,
  },
});

export default DashboardScreen;
