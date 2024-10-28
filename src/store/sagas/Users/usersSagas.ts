import { setUsersFailure, setUsersSuccess } from "../../actions/Users/getUsers";
import { put, call } from "redux-saga/effects";
import GET_USERS from "../../../graphql/querys/getUsers";
import client from "../../apollo";

interface Action {
  type: string;
  payload: string;
}

export function* usersSagas(action: Action) {
  try {
    const { data } = yield call(client.mutate, {
      mutation: GET_USERS,
      variables: { isn_usuario: action.payload },
    });

    yield put(setUsersSuccess(data.getUsers));
  } catch (error: any) {
    yield put(setUsersFailure(error.message));
  }
}
