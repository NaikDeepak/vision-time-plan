import React from "react";
import {
  Dimensions,
  View,
  ActivityIndicator,
  StyleSheet,
  ScrollView,
  useWindowDimensions,
  SafeAreaView,
} from "react-native";
import RenderHtml from "react-native-render-html";
import { isTag } from "domutils";

import { useFetch } from "../components/useFetch";
import theme from "../config/theme";
import constants from "../config/constants";

function ignoreDomNode(node, parent) {
  // remove date and inpiut fields
  return isTag(node) && ["date", "input", "rs-module-wrap"].includes(node.name);
}

const CustomDynamicScreen = (props) => {
  const { width } = useWindowDimensions();
  const CustomDynamicData = useFetch(
    constants.URL.pagesRoot + props.route.params.slug
  );

  if (!CustomDynamicData) {
    return (
      <View style={styles.container}>
        <ActivityIndicator size="large" color="#1C97F7" />
      </View>
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      {CustomDynamicData && (
        <ScrollView contentContainerStyle={{ width: "98%" }}>
          <RenderHtml
            contentWidth={width * 0.75}
            source={{ html: CustomDynamicData[0]?.content?.rendered }}
            ignoreDomNode={ignoreDomNode}
          />
        </ScrollView>
      )}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 0,
    marginHorizontal: 10,
  },
});

export default CustomDynamicScreen;
