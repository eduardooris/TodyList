import { MaterialIcons } from "@expo/vector-icons";
import { useEffect } from "react";
import Animated, {
  runOnUI,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from "react-native-reanimated";
import { Pressable, Dimensions, StyleSheet } from "react-native";

import {
  TabNavigationState,
  ParamListBase,
  NavigationHelpers,
} from "@react-navigation/native";
import { BottomTabNavigationEventMap } from "@react-navigation/bottom-tabs";
import { Design } from "../../util/Design";

export const routes = {
  home: { name: "Home", icon: "home" },
  profile: { name: "Profile", icon: "people" },
  bi: { name: "BI", icon: "auto-graph" },
  settings: { name: "Settings", icon: "settings" },
};

const { width } = Dimensions.get("window");
const TAB_WIDTH = (width - 40 * 2) / 4;

type Props = {
  state: TabNavigationState<ParamListBase>;
  descriptors: any;
  navigation: NavigationHelpers<ParamListBase, BottomTabNavigationEventMap>;
};

const TabBarComponent = ({ state, navigation, descriptors }: Props) => {
  const translateX = useSharedValue(0);
  const focusedTab = state.index;

  const handleAnimate = (index: number) => {
    "worklet";
    translateX.value = withTiming(index * TAB_WIDTH, {
      duration: 500,
    });
  };
  useEffect(() => {
    runOnUI(handleAnimate)(focusedTab);
  }, [focusedTab]);

  const rnStyle = useAnimatedStyle(() => {
    return {
      transform: [{ translateX: translateX.value }],
    };
  });
  return (
    <>
      <Animated.View style={[styles.container, rnStyle]} />
      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key];
        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: "tabPress",
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate({
              name: route.name,
              merge: true,
              params: {},
            });
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: "tabLongPress",
            target: route.key,
          });
        };
        const routeName = route.name.toLowerCase() as keyof typeof routes;
        const icon = routes[routeName]?.icon;

        return (
          <Pressable
            key={`route-${index}`}
            accessibilityRole="button"
            accessibilityState={isFocused ? { selected: true } : {}}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarTestID}
            onPress={onPress}
            onLongPress={onLongPress}
            style={styles.item}
          >
            <MaterialIcons
              name={icon}
              size={24}
              color={isFocused ? Design.Neutral.White : Design.Brand.Dark}
            />
          </Pressable>
        );
      })}
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    width: TAB_WIDTH,
    height: 40,
    backgroundColor: Design.Brand.Default,
    zIndex: 0,
    position: "absolute",
    marginHorizontal: 20,
    borderRadius: 20,
  },
  item: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default TabBarComponent;
