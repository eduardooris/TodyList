import { View, ActivityIndicator, Text, StyleSheet } from "react-native";
import { Design } from "../../util/Design";

interface ListEmptyComponentProps {
  loading: boolean;
  children: React.ReactNode;
}

export default function ListEmptyComponent({
  loading,
  children,
}: ListEmptyComponentProps) {
  return (
    <View style={styles.container}>
      {loading ? (
        <ActivityIndicator size="large" color={Design.Brand.Default} />
      ) : (
        <Text allowFontScaling={false} style={styles.text}>
          {children}
        </Text>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 16,
    fontWeight: "700",
    color: Design.Brand.Default,
  },
});
