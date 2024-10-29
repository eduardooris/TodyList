import { setLoginFailure, setLoginSuccess } from "../../actions/Login";
import { call, put } from "redux-saga/effects";
import client from "../../apollo";
import MUTATION from "../../../graphql/mutations/AppInit";
import { getTasksSaga } from "../Tasks/tasksSagas";
import { setTasksRequest } from "../../actions/Task";
import AsyncStorage from "@react-native-async-storage/async-storage";

interface Action {
  type: string;
  payload: string;
}

export default function* getTokenSaga(action: Action) {
  try {
    const { data } = yield call(client.mutate, {
      mutation: MUTATION,
      variables: {
        token: action.payload,
      },
    });
    yield AsyncStorage.setItem("@TokenApi", data.getAppInit.token);
    yield put(setTasksRequest({ isn_usuario: data.getAppInit.id }));
    yield put(setLoginSuccess(data.getAppInit));
  } catch (error: any) {
    yield put(setLoginFailure(error.message));
  }
}
