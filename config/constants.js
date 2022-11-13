import { Dimensions, Platform } from "react-native";
import theme from "./theme";
let headerHeight = Platform.OS === "ios" ? 66 : 46;
let footerHeight = 55;
const constants = {
  URL: {
    posts: "https://eaststigers.com/wp-json/wp/v2/posts",
    home: "https://eaststigers.com/wp-json/wp/v2/posts?_embed",
    menu: "https://eaststigers.com/wp-json/menus/v1/menus/header-menu",
    pagesRoot: "https://eaststigers.com/wp-json/wp/v2/pages?slug=",
  },
  headerHeight: headerHeight,
  footerHeight: footerHeight,
  viewHeight: Dimensions.get("window").height - headerHeight,
  viewPadding: 15,
  defaultSpacer: 10,
  screenHeight: Dimensions.get("window").height,
  screenWidth: Dimensions.get("window").width,
  divider: { backgroundColor: theme.COLORS.GREY },
  baseImageStyle: { flex: 1, width: undefined, height: undefined },
};
export default constants;
