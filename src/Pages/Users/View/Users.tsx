import {
  FlatList,
  Pressable,
  StyleSheet,
  Text,
  TouchableOpacity,
} from "react-native";
import { useUsersLogic } from "../Logic/Users.logic";
import { useCallback } from "react";
import { User } from "../../../interface/User";
import IUser from "../../../components/User";
export default function Users({ navigation }: any) {
  const { loading, users, error } = useUsersLogic();
  const renderItem = useCallback(
    ({ item }: { item: User }) => {
      return (
        <Pressable onPress={() => navigation.navigate("DetailUser", item)}>
          <IUser {...item} />
        </Pressable>
      );
    },
    [users]
  );

  return (
    <FlatList
      data={users}
      renderItem={renderItem}
      contentContainerStyle={styles.container}
      keyExtractor={(_, index) => index.toString()}
    />
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    paddingHorizontal: 20,
    paddingVertical: 20,
    marginTop: 50,
  },
});
