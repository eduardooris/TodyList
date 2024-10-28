import { useDispatch, useSelector } from "react-redux";
import { useForm } from "../../../hooks/useForm";
import { RootState } from "../../../interface/rootReducer";
import { createTask } from "../Model/createTask.service";
import { setTasksRequest } from "../../../store/actions/Task";
import { useEffect, useRef } from "react";
import {
  setHideTabBar,
  setShowTabBar,
} from "../../../hooks/useVisibilityTabBar";
interface CreateTask {
  title: string | undefined;
  description: string | undefined;
  date?: string | undefined;
}

interface IdateRef {
  open: () => void;
}

export const useCreateTask = ({ navigation }: any) => {
  const auth = useSelector((state: RootState) => state.user.user);
  const dispatch = useDispatch();
  const dateRef = useRef<IdateRef>(null);
  const [form, setForm] = useForm<CreateTask>({
    title: undefined,
    description: undefined,
    date: undefined,
  });

  const [requestState, setRequestState] = useForm({
    loading: false,
    error: "",
  });

  useEffect(() => {
    setHideTabBar();

    return () => {
      setShowTabBar();
    };
  }, []);

  const submit = async () => {
    try {
      if (!form.title || !form.description)
        return setRequestState({ error: "Todos os campos são obrigatórios!" });

      setRequestState({ loading: true });

      const data = {
        title: form.title,
        description: form.description,
        isn_usuario: auth?.id || "",
      };

      const response = await createTask(data);

      if (response) {
        dispatch(setTasksRequest({ isn_usuario: data.isn_usuario }));
        navigation.goBack();
      }
    } catch (error: any) {
      setRequestState(error);
    } finally {
      setRequestState({ loading: false });
    }
  };

  return { form, setForm, submit, requestState, dateRef };
};
