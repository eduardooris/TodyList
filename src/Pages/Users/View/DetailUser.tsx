import { FlatList, Text } from "react-native";
import { useDetailLogic } from "../Logic/UserDetail.logic";
import { useCallback } from "react";
import { Task } from "../../../interface/Taks";

export default function DetailUser(props: any) {
  const { tasks, user, loading, error } = useDetailLogic(props);
  const renderItem = useCallback(
    ({ item }: { item: Task }) => {
      return <Text allowFontScaling={false}>{item.title}</Text>;
    },
    [tasks]
  );

  return (
    <FlatList
      data={tasks}
      renderItem={renderItem}
      keyExtractor={(item) => item.id.toString()}
    />
  );
}
