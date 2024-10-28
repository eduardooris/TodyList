import { call, put } from "redux-saga/effects";
import TASKS_QUERY from "../../../graphql/querys/getTasks";
import client from "../../apollo";
import { setTasksFailure, setTasksSuccess } from "../../actions/Task";
interface Action {
  type: string;
  payload: { isn_usuario: string };
}

function* getTasksSaga(action: Action) {
  try {
    const { data } = yield call(client.mutate, {
      mutation: TASKS_QUERY,
      variables: {
        isn_usuario: action.payload.isn_usuario,
      },
    });
    yield put(setTasksSuccess(data.getTasks));
  } catch (error: any) {
    yield put(setTasksFailure(error.message));
  }
}

export { getTasksSaga };
