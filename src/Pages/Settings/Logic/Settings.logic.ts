import { useSelector } from "react-redux";
import { RootState } from "../../../interface/rootReducer";
import { useForm } from "../../../hooks/useForm";
import { User } from "../../../interface/User";

export const useSettingsLogic = () => {
  const auth = useSelector((state: RootState) => state.user.user);

  const [form, setForm] = useForm<User>({
    id: auth?.id,
    username: auth?.username,
    email: auth?.email,
  });

  return { form, setForm };
};
