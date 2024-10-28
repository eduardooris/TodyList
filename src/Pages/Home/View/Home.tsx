import { FlatList, StyleSheet, Text, View } from "react-native";
import { useHome } from "../Logic/Home.logic";
import { useCallback } from "react";
import { Task } from "../../../interface/Taks";
import Button from "../../../components/Button";
import ListEmptyComponent from "../../../components/ListEmptyComponent";
import Add from "../../../components/Add";

interface HomeProps {
  navigation: {
    navigate: (route: string) => void;
    goBack: () => void;
  };
}

export default function Home(props: HomeProps) {
  const { tasks, loading, error } = useHome();

  const renderItem = useCallback(
    ({ item }: { item: Task }) => {
      return (
        <Text>
          {item.title} {item.description}
        </Text>
      );
    },
    [tasks]
  );

  return (
    <>
      <FlatList
        data={tasks}
        renderItem={renderItem}
        contentContainerStyle={styles.container}
        ListEmptyComponent={
          <ListEmptyComponent loading={loading}>
            Nenhum conteúdo encontrado!
          </ListEmptyComponent>
        }
        keyExtractor={(item) => item.id.toString()}
      />
      <Add onPress={() => props.navigation.navigate("CreateTask")} />
      {/* <Button
        size="large"
        type="solid"
        onPress={() => props.navigation.navigate("CreateTask")}
      >
        Criar Tarefa
      </Button> */}
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
  },
});
