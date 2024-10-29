import { Task } from "../../../interface/Taks";
import { call, put } from "redux-saga/effects";
import client from "../../apollo";
import MUTATION_UPDATE from "../../../graphql/mutations/updateTask";
import { setTasksFailure, setTasksRequest } from "../../actions/Task";
import { getTasksSaga } from "./tasksSagas";

interface UpdateTaskPayload {
  id: string;
  completed: boolean;
}

interface PayloadAction<T> {
  type: string;
  payload: T;
}

function* updateTaskSaga(action: PayloadAction<UpdateTaskPayload>) {
  try {
    const { completed, id } = action.payload;
    const { data } = yield call(client.mutate, {
      mutation: MUTATION_UPDATE,
      variables: {
        id,
        completed,
      },
    });
    yield put(setTasksRequest({ isn_usuario: data.updateTask.isn_usuario }));
  } catch (error: any) {
    yield put(setTasksFailure(error.message));
  }
}

export default updateTaskSaga;
