import {
  setUserDetailFailure,
  setUserDetailSuccess,
} from "../../actions/Users/getUser";
import { put, call } from "redux-saga/effects";
import GET_USER from "../../../graphql/querys/getTasks";
import client from "../../apollo";
import { User } from "../../../interface/User";

interface Action {
  type: string;
  payload: User;
}

export function* userDetailSagas(action: Action) {
  try {
    const { data } = yield call(client.mutate, {
      mutation: GET_USER,
      variables: { isn_usuario: action.payload.id },
    });
    yield put(
      setUserDetailSuccess({ ...action.payload, tasks: data.getTasks })
    );
  } catch (error: any) {
    yield put(setUserDetailFailure(error.message));
  }
}
