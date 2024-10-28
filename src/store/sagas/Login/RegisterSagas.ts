import { call, put } from "redux-saga/effects";
import REGISTER_MUTATION from "../../../graphql/mutations/register";
import client from "../../apollo";
import { getTasksSaga } from "../Tasks/tasksSagas";
import { setLoginSuccess, setLoginFailure } from "../../actions/Login";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { setTasksRequest } from "../../actions/Task";
interface Action {
  type: string;
  payload: { email: string; username: string; password: string };
}

export function* registerSaga(action: Action) {
  try {
    const { data } = yield call(client.mutate, {
      mutation: REGISTER_MUTATION,
      variables: {
        email: action.payload.email,
        password: action.payload.password,
        username: action.payload.username,
      },
    });

    yield AsyncStorage.setItem("@TokenApi", data.register.token);
    yield call(
      getTasksSaga,
      setTasksRequest({ isn_usuario: data.register.id })
    );
    yield put(setLoginSuccess(data.register));
  } catch (error: any) {
    yield put(setLoginFailure(error.message));
  }
}
