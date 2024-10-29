import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../interface/rootReducer";
import { useForm } from "../../../hooks/useForm";
import { setRegister } from "../../../store/actions/Login";

interface IRegister {
  username: string | undefined;
  email: string | undefined;
  password: string | undefined;
  confirmPassword: string | undefined;
}

export const useRegisterLogic = () => {
  const [form, setForm] = useForm<IRegister>({
    username: "admin4",
    email: "admin4",
    password: "admin4",
    confirmPassword: "admin4",
  });
  const dispatch = useDispatch();
  const { error, loading } = useSelector((state: RootState) => {
    return {
      loading: state.user.loading,
      error: state.user.error,
    };
  });

  const submit = () => {
    dispatch(setRegister(form));
  };

  return {
    loading,
    error,
    form,
    setForm,
    submit,
  };
};
