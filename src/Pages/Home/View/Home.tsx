import { FlatList, Pressable, StyleSheet, Text, View } from "react-native";
import { useHome } from "../Logic/Home.logic";
import { useCallback, useMemo, useRef } from "react";
import { Task } from "../../../interface/Taks";
import ListEmptyComponent from "../../../components/ListEmptyComponent";
import Add from "../../../components/Add";
import ITask from "../../../components/Task";
import BottomSheet, { BottomSheetView } from "@gorhom/bottom-sheet";
import Button from "../../../components/Button";
import Input from "../../../components/Input";
interface HomeProps {
  navigation: {
    navigate: (route: string) => void;
    goBack: () => void;
  };
}

export default function Home(props: HomeProps) {
  const {
    tasks,
    loading,
    showModal,
    snapPoints,
    handleSheetChange,
    deleteTask,
    bottomSheetRef,
    updateTasks,
    form,
    setForm,
    addComment,
    comments,
  } = useHome();

  const renderItem = useCallback(
    ({ item }: { item: Task }) => {
      return (
        <Pressable onPress={() => showModal(item)}>
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
      <BottomSheet
        ref={bottomSheetRef}
        snapPoints={snapPoints}
        enableDynamicSizing={false}
        onChange={handleSheetChange}
        // onChange={handleSheetChanges}
      >
        <BottomSheetView>
          {comments?.map(({ comment, id }) => {
            return (
              <Text key={id} style={{ fontSize: 20 }}>
                {comment}
              </Text>
            );
          })}
          <Button type="solid" size="large" onPress={deleteTask}>
            Excluir
          </Button>
          <Button type="solid" size="large" onPress={updateTasks}>
            Atualizar
          </Button>

          <Input
            label="Comentário"
            placeholder="Digite um comentário"
            value={form.comment}
            onChangeText={(text) => setForm({ comment: text })}
          />
          <Button type="solid" size="large" onPress={addComment}>
            Adicionar comentário
          </Button>
        </BottomSheetView>
      </BottomSheet>
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
