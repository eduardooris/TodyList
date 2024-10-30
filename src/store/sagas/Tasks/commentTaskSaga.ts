import { setTasksFailure, setTasksRequest } from "../../actions/Task";
import { put, call } from "redux-saga/effects";
import client from "../../apollo";
import MUTATION_COMMENT from "../../../graphql/mutations/addComment";
interface Action {
  type: string;
  payload: {
    id: string;
    comment: string;
    isn_usuario: string;
  };
}

function* commentTaskSaga(action: Action) {
  try {
    const { data } = yield call(client.mutate, {
      mutation: MUTATION_COMMENT,
      variables: {
        id: action.payload.id,
        comment: action.payload.comment,
        isn_usuario: action.payload.isn_usuario,
      },
    });

    yield put(setTasksRequest({ isn_usuario: data.addComment.isn_usuario }));
  } catch (error: any) {
    yield put(setTasksFailure(error.message));
  }
}

export { commentTaskSaga };
