import { FlatList, Pressable, Text, View } from "react-native";
import { useDetailLogic } from "../Logic/UserDetail.logic";
import { useCallback } from "react";
import { Task } from "../../../interface/Taks";
import ITask from "../../../components/Task";
import Container from "../../../components/Container";
import ListEmptyComponent from "../../../components/ListEmptyComponent";
import DetailTask from "../components/DetailTask";

export default function DetailUser(props: any) {
  const { tasks, user, loading, detailTaskRef, selectTask, showDetailTask } =
    useDetailLogic(props);
  const renderItem = useCallback(
    ({ item }: { item: Task }) => {
      return (
        <Pressable onPress={() => showDetailTask(item)}>
          <ITask {...item} />
        </Pressable>
      );
    },
    [tasks]
  );

  return (
    <Container
      navigation={props.navigation}
      title={user?.username}
      icon="call"
      onPress={() => props.navigation.navigate("Call")}
    >
      <FlatList
        data={tasks}
        renderItem={renderItem}
        ItemSeparatorComponent={() => <View style={{ height: 20 }} />}
        ListEmptyComponent={
          <ListEmptyComponent loading={loading}>
            Nenhum registro encontrado!
          </ListEmptyComponent>
        }
        contentContainerStyle={{ padding: 15 }}
        keyExtractor={(item) => item.id.toString()}
      />

      <DetailTask ref={detailTaskRef} task={selectTask} />
    </Container>
  );
}
