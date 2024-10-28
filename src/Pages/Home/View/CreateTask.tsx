import { ScrollView, StyleSheet, TouchableOpacity, View } from "react-native";
import { useCreateTask } from "../Logic/CreateTask.logic";
import Button from "../../../components/Button";
import Container from "../../../components/Container";
import Input from "../../../components/Input";
import DatePicker from "../../../components/Date";
interface CreateTaskProps {
  navigation: {
    navigate: (route: string) => void;
    goBack: () => void;
  };
}

export default function CreateTask(props: CreateTaskProps) {
  const { form, setForm, submit, dateRef } = useCreateTask(props);
  return (
    <Container title="Criar nova tarefa" navigation={props.navigation}>
      <View style={styles.contentContainerStyle}>
        <View>
          <Input
            label="Titulo"
            placeholder="Digite um titulo para sua tarefa"
            value={form.title}
            onChangeText={(text) => setForm({ title: text })}
          />
          <Input
            label="Descrição"
            placeholder="Digite uma descrição para sua tarefa"
            value={form.description}
            onChangeText={(text) => setForm({ description: text })}
          />
          <TouchableOpacity onPress={() => dateRef.current?.open()}>
            <Input
              label="Data"
              pointerEvents="none"
              placeholder="Digite a data para sua tarefa"
              value={form.date}
            />
          </TouchableOpacity>
        </View>
        <Button type="solid" size="large" onPress={submit}>
          Nova tarefa
        </Button>
      </View>

      <DatePicker ref={dateRef} onClose={(e) => setForm({ date: e })} />
    </Container>
  );
}

const styles = StyleSheet.create({
  contentContainerStyle: {
    flexGrow: 1,
    alignSelf: "center",
    justifyContent: "space-between",
    marginBottom: 30,
  },
});
