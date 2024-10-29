import { call, put } from "redux-saga/effects";
import LOGIN_MUTATION from "../../../graphql/mutations/login";
import client from "../../apollo";
import { getTasksSaga } from "../Tasks/tasksSagas";
import { setLoginSuccess, setLoginFailure } from "../../actions/Login";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { setTasksRequest } from "../../actions/Task";
interface Action {
  type: string;
  payload: { email: string; password: string };
}

export function* loginSaga(action: Action) {
  try {
    const { data } = yield call(client.mutate, {
      mutation: LOGIN_MUTATION,
      variables: {
        email: action.payload.email,
        password: action.payload.password,
      },
    });
    yield AsyncStorage.setItem("@TokenApi", data.login.token);
    yield put(setTasksRequest({ isn_usuario: data.login.id }));
    yield put(setLoginSuccess(data.login));
  } catch (error: any) {
    yield put(setLoginFailure(error.message));
  }
}
