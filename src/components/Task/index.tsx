import { StyleSheet, View, Text, Platform } from "react-native";
import { Task } from "../../interface/Taks";
import { Design } from "../../util/Design";
import { MaterialIcons } from "@expo/vector-icons";
export default function ITask({
  comments,
  completed,
  title,
  description,
  date,
}: Task) {
  const color = completed ? Design.Error.Default : Design.Brand.Default;

  return (
    <View style={styles.container}>
      <View
        style={[
          styles.top,
          {
            backgroundColor: color,
          },
        ]}
      >
        <View style={styles.containerTitle}>
          <MaterialIcons name="flag" size={20} color={Design.Neutral.White} />
          <Text style={styles.title}>{title}</Text>
        </View>
        <View>
          <MaterialIcons
            name="more-horiz"
            size={24}
            color={Design.Neutral.White}
          />
        </View>
      </View>
      <View style={styles.bottom}>
        <View style={styles.containerDescription}>
          <MaterialIcons name="radio-button-on" color={color} size={24} />
          <Text
            style={[
              styles.description,
              { textDecorationLine: completed ? "line-through" : "none" },
            ]}
          >
            {description}
          </Text>
        </View>
        <View style={styles.divider} />
        <View style={styles.containerActions}>
          <View style={styles.containerInfoActions}>
            <MaterialIcons
              name="comment"
              size={14}
              color={Design.Neutral.Ghost}
            />
            <Text style={styles.description}>{comments.length}</Text>
          </View>
          <View>
            <Text style={styles.description}>22/10/2024</Text>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    ...Platform.select({
      ios: {
        shadowColor: "#000000",
        shadowOpacity: 0.05,
        shadowOffset: {
          width: 10,
          height: 10,
        },
      },
      android: {
        elevation: 0,
      },
    }),
  },
  top: {
    backgroundColor: Design.Brand.Default,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    height: 40,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 15,
  },
  containerTitle: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },
  title: {
    color: Design.Neutral.White,
  },
  bottom: {
    backgroundColor: Design.Neutral.White,
    height: 100,
    borderBottomStartRadius: 10,
    borderBottomEndRadius: 10,
    paddingHorizontal: 25,
    paddingVertical: 15,
    justifyContent: "space-between",
  },
  divider: {
    width: "100%",
    height: 1,
    backgroundColor: Design.Neutral.Line,
  },
  description: {
    color: Design.Neutral.Secondary,
  },
  containerDescription: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },
  containerActions: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  containerInfoActions: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },
});
