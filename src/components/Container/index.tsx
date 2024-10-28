import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { Design } from "../../util/Design";
import If from "../If";
interface ContainerProps {
  navigation: {
    goBack: () => void;
  };
  onPress?: () => void;
  title?: string;
  icon?: string;

  children: React.ReactNode;
}

export default function Container({
  onPress,
  title,
  navigation,
  icon,
  children,
}: ContainerProps) {
  return (
    <View style={styles.container}>
      <View style={styles.tabNavigation}>
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={styles.containerIcon}
        >
          <If condition={navigation != undefined}>
            <MaterialIcons
              name="arrow-back-ios"
              size={25}
              color={Design.Brand.Dark}
            />
          </If>
        </TouchableOpacity>
        <Text allowFontScaling={false} style={styles.text}>
          {title}
        </Text>
        <TouchableOpacity onPress={onPress} style={styles.containerIcon}>
          <If condition={icon != undefined}>
            <MaterialIcons name={icon} size={25} color={Design.Brand.Dark} />
          </If>
        </TouchableOpacity>
      </View>

      <View style={styles.content}>{children}</View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 60,
  },
  tabNavigation: {
    flexDirection: "row",
    justifyContent: "space-around",
    paddingVertical: 10,
  },
  content: {
    flexGrow: 1,
    marginTop: 20,
  },
  text: {
    fontSize: 17,
    fontWeight: "600",
    color: Design.Brand.Dark,
  },
  containerIcon: {
    width: 25,
    height: 25,
  },
});
