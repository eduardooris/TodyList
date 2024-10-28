import { FlatList, Text, TouchableOpacity } from "react-native";
import { useUsersLogic } from "../Logic/Users.logic";
import { useCallback } from "react";
import { User } from "../../../interface/User";

export default function Users({ navigation }: any) {
  const { loading, users, error } = useUsersLogic();
  const renderItem = useCallback(
    ({ item }: { item: User }) => {
      return (
        <TouchableOpacity
          onPress={() => navigation.navigate("DetailUser", item)}
        >
          <Text allowFontScaling={false}>{item.username}</Text>
        </TouchableOpacity>
      );
    },
    [users]
  );

  return (
    <FlatList
      data={users}
      renderItem={renderItem}
      keyExtractor={(item) => item.id.toString()}
    />
  );
}
