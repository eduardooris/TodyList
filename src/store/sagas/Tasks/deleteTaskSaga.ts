import { call, put } from "redux-saga/effects";
import { setTasksFailure, setTasksRequest } from "../../actions/Task";
import client from "../../apollo";
import MUTATION_DELETE from "../../../graphql/mutations/deleteTask";

interface Action {
  type: string;
  payload: string;
}

function* deleteTaskSaga(action: Action) {
  try {
    const { data } = yield call(client.mutate, {
      mutation: MUTATION_DELETE,
      variables: {
        id: action.payload,
      },
    });
    yield put(setTasksRequest({ isn_usuario: data.deleteTask.isn_usuario }));
  } catch (error: any) {
    yield put(setTasksFailure(error.message));
  }
}

export { deleteTaskSaga };
