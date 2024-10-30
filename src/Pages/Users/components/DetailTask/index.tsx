import BottomSheet, { BottomSheetView } from "@gorhom/bottom-sheet";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../../interface/rootReducer";
import { Task } from "../../../../interface/Taks";
import { forwardRef, useImperativeHandle, useMemo, useRef } from "react";
import { Text } from "react-native";
import { setCommentTask } from "../../../../store/actions/Task";
import { useForm } from "../../../../hooks/useForm";
import Input from "../../../../components/Input";
import Button from "../../../../components/Button";

const DetailTask = forwardRef(({ task }: { task: Task | null }, ref) => {
  const dispatch = useDispatch();

  const { tasks, user } = useSelector((state: RootState) => {
    return {
      tasks: state.userDetail.user?.tasks,
      user: state.user.user,
    };
  });

  const [form, setForm] = useForm({
    comment: "",
  });

  const comments = useMemo(() => {
    return tasks?.find((it) => it.id == task?.id)?.comments;
  }, [tasks, task]);

  const bottomSheetRef = useRef<BottomSheet>(null);

  const snapPoints = useMemo(() => {
    return ["1%", "25%", "50%"];
  }, []);

  useImperativeHandle(ref, () => ({
    expand: () => {
      bottomSheetRef.current?.expand();
    },
    close: () => {
      bottomSheetRef.current?.close();
    },
  }));

  const addComment = () => {
    if (task) {
      dispatch(
        setCommentTask({
          id: task.id,
          comment: form.comment,
          isn_usuario: user?.id,
        })
      );
      setForm({ comment: "" });
    }
  };

  return (
    <BottomSheet ref={bottomSheetRef} snapPoints={snapPoints}>
      <BottomSheetView>
        <Input
          label="Comentário"
          value={form.comment}
          onChangeText={(text) => setForm({ comment: text })}
          placeholder="Digite um comentário"
        />
        <Button
          type="solid"
          size="small"
          style={{ alignSelf: "center" }}
          onPress={addComment}
        >
          Enviar
        </Button>
        <Text>Comentários</Text>
        {comments?.map(({ comment, id }) => (
          <Text key={id}>{comment}</Text>
        ))}
      </BottomSheetView>
    </BottomSheet>
  );
});

export default DetailTask;
