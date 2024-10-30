import { useDispatch, useSelector } from "react-redux";
import { useForm } from "../../../hooks/useForm";
import { RootState } from "../../../interface/rootReducer";
import { setInitToken, setLogin } from "../../../store/actions/Login";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useEffect } from "react";

interface Login {
  email: string | undefined;
  password: string | undefined;
}

export const useLogin = () => {
  const dispatch = useDispatch();

  const { loading, error } = useSelector((state: RootState) => {
    return {
      loading: state.user.loading,
      error: state.user.error,
    };
  });

  const [form, setForm] = useForm<Login>({
    email: "admin2",
    password: "admin2",
  });

  useEffect(() => {
    isAuth();
  }, []);

  const isAuth = async () => {
    try {
      const token = await AsyncStorage.getItem("@TokenApi");
      if (token) {
        dispatch(setInitToken(token));
      }
    } catch (error) {}
  };

  const signIn = () => {
    if (form.email && form.password) {
      dispatch(setLogin(form));
    }
  };

  return { loading, error, signIn, form, setForm };
};
