import { FlatList, Pressable, StyleSheet, Text, View } from "react-native";
import { useHome } from "../Logic/Home.logic";
import { useCallback } from "react";
import { Task } from "../../../interface/Taks";
import Button from "../../../components/Button";
import ListEmptyComponent from "../../../components/ListEmptyComponent";
import Add from "../../../components/Add";
import ITask from "../../../components/Task";
interface HomeProps {
  navigation: {
    navigate: (route: string) => void;
    goBack: () => void;
  };
}

export default function Home(props: HomeProps) {
  const { tasks, loading, updateTasks } = useHome();

  const renderItem = useCallback(
    ({ item }: { item: Task }) => {
      return (
        <Pressable onPress={() => updateTasks({ id: item.id })}>
          <ITask {...item} />
        </Pressable>
      );
    },
    [tasks]
  );

  return (
    <>
      <View></View>
      <FlatList
        data={tasks}
        renderItem={renderItem}
        contentContainerStyle={styles.container}
        ItemSeparatorComponent={() => <View style={{ height: 20 }} />}
        showsVerticalScrollIndicator={false}
        ListEmptyComponent={
          <ListEmptyComponent loading={loading}>
            Nenhum conteúdo encontrado!
          </ListEmptyComponent>
        }
        keyExtractor={(item) => item.id.toString()}
      />
      <Add onPress={() => props.navigation.navigate("CreateTask")} />
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    marginTop: 70,
    paddingHorizontal: 20,
    paddingBottom: 260,
  },
});
